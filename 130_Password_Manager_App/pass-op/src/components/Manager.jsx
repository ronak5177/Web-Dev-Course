import { useRef, useState, useEffect } from 'react'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])

    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        } else {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text"
        }
    }
    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            // console.log(form.site)

            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            // console.log([...passwordArray, {...form, id: uuidv4()}])
            setform({ site: "", username: "", password: "" })
            toast('Password sucessfully saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            // console.log(form.site.password)
            toast('Password not saved!')
        }
    }

    const deletePassword = (id) => {
        let conf = confirm("Do you really want to delete the password?")
        if (conf) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            // console.log("Deleting password with id: ", id)
        }

    }
    const editPassword = (id) => {
        // console.log("Edited password with id: ", id)
        setform(passwordArray.filter(item => item.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = async (text) => {
        try {
            toast('Copied to Clipboard!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            await navigator.clipboard.writeText(text);
        } catch (error) {
            alert(`Some Issue while copying the keyboard: ${error.message}`)
        }
    }
    return (

        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />

            <div className="absolute inset-0 -z-10 h-full w-fulL"></div>
            <div className="p-2 md:mycontainer min-h-[84.2vh]">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your own password manager</p>
                <div className="flex flex-col p-3 gap-6 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website Name' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="site" />
                    <div className="flex flex-col md:flex-row w-full gap-5">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="username" />
                        <div className="relative">
                            <div className='flex justify-center items-center gap-2'>
                                <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-5 py-1' type="password" name="password" id="password" />
                                <span className="absolute right-1 cursor-pointer" onClick={showPassword}>
                                    <img ref={ref} className='p-2' src="icons/eye.png" width={35} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center gap-2 items-center bg-green-400 hover:bg-green-300 rounded-full px-6 py-1 w-fit border border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Save Password</button>
                </div>

                <div className="passwords my-5">
                    <h2 className="font-bold text-2xl py-3">Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-7">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2 px-4'>Sr. No</th>
                                <th className='py-2 px-4'>Site</th>
                                <th className='py-2 px-4'>Username</th>
                                <th className='py-2 px-4'>Password</th>
                                <th className='py-2 px-4'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 text-center text-sm border border-white'>{index + 1}</td>
                                    <td className='py-2 text-center text-sm gap-2 border border-white'>
                                        <div className='flex justify-center items-center gap-2'>
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div className='lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.site) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='py-2 text-center text-sm gap-2 border border-white'>
                                        <div className='flex justify-center items-center gap-2'>
                                            <span>{item.username}</span>

                                            <div className='lordiconcopy cursor-pointer size-7' onClick={() => copyText(item.username)}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='py-2 text-center text-sm gap-2 border border-white'>
                                        <div className='flex justify-center items-center gap-2'>
                                            <span>{item.password}</span>
                                            <div className='lordiconcopy cursor-pointer size-7' onClick={() => copyText(item.password)}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='py-2 text-center text-sm gap-2 border border-white'>
                                        <span className='cursor-pointer mx-1' onClick={() => editPassword(item.id)}>
                                            <lord-icon
                                                style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => deletePassword(item.id)}>
                                            <lord-icon
                                                style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
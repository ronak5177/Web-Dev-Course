import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container my-5 size-80 bg-gray-300 relative">
        <Image
          className="mx-auto object-contain"
          fill={true}
          // width={700}
          // height={700}
          src="https://cdn.vectorstock.com/i/1000x1000/86/54/days-hours-minutes-seconds-vector-18728654.webp"
          alt="image.jpg"
        />
      </div>
    </>
  );
}

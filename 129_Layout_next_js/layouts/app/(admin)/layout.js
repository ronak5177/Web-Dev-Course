export const metadata = {
  title: "Admin - Facebook",
  description:
    "Admin - Facebook: A social media application to connect with people",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <span>Admin Navbar</span>
      {children}
    </>
  );
}

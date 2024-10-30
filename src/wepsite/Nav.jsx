export default function Navbar() {
  return (
    <div className="myNavbar">
      {/* logo, tabs, Account */}
      <div>
        <i className="fa-brands fa-square-pied-piper"></i>
      </div>
      <div>
        <ul className="list">
          <li>Home</li>
          <li>Courses</li>
          <li>tasks</li>
          <li>about</li>
        </ul>
      </div>
      <div>
        <i className="fa-solid fa-user"></i>
      </div>
    </div>
  );
}

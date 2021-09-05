import { Layout, Menu, Row, Col } from "antd";
import Link from "next/link";
import { connect } from "react-redux";
import { signOut } from "../../redux/actions/authAction";

const { Header } = Layout;
const { SubMenu } = Menu;

const getItems = (isSignedIn, signOut) => {
  if (isSignedIn) {
    return (
      <>
        <Menu.Item key="5">
          <a
            href="#"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </a>
        </Menu.Item>
      </>
    );
  }
  return (
    <>
      <Menu.Item key="6">
        <Link href="/auth/login" onClick={() => router.push("/auth/login")}>
          Login
        </Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link href="/auth/signup" onClick={() => router.push("/auth/signup")}>
          Sign up
        </Link>
      </Menu.Item>
    </>
  );
};

const navbar = ({ isSignedIn, signOut }) => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <Row>
        <Col xs={24} sm={4} md={6} lg={6} xl={6}>
          <div className="logo">
            <img src="/img/logo.png" alt="Logo" height={40} />
          </div>
        </Col>
        <Col xs={24} sm={4} md={18} lg={18} xl={18}>
          <Menu
            theme=""
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ float: "right" }}
          >
            <SubMenu key="1" title="Jobs">
              <Menu.Item key="setting:1">
                <Link href="/jobs/post">Post a Job</Link>
              </Menu.Item>
              <Menu.Item key="setting:2">
                {" "}
                <Link href="/jobs/list">Job list</Link>
              </Menu.Item>
              <Menu.Item key="setting:3">
                {" "}
                <Link href="/jobs/saved">Saved Jobs</Link>
              </Menu.Item>
              <Menu.Item key="setting:4">
                {" "}
                <Link href="/jobs/applied">Applied Jobs</Link>
              </Menu.Item>
              <Menu.Item key="setting:5">
                {" "}
                <Link href="/jobs/my_posts">My Posted Jobs</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="4" title="Workers">
              <Menu.Item key="setting:1">
                <Link href="/worker/list">List</Link>
              </Menu.Item>
              <Menu.Item key="setting:2">
                {" "}
                <Link href="/worker/saved">Saved workers</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="2" title="Announcements">
              <Menu.Item key="setting:1">
                <Link href="/announcement">All Announcements</Link>
              </Menu.Item>
              <Menu.Item key="setting:2">
                {" "}
                <Link href="/announcement/myannouncement">
                  My Announcements
                </Link>
              </Menu.Item>
              <Menu.Item key="setting:3">
                {" "}
                <Link href="/announcement/create">Create Announcement</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="3">
              <Link href="/Profile/Profile_info">Profile</Link>
            </Menu.Item>
            {getItems(isSignedIn, signOut)}
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signOut })(navbar);

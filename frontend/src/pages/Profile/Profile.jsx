import { useContext } from "react";
import styles from "./Profile.module.scss";
import { AuthContext } from "../../context";

function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex-fill d-flex justify-content-center align-items-center">
      <div className={`${styles.profileContainer} card p-20`}>
        <h3 className="mb-20">Page de profil</h3>
        <ul>
          <li>Nom: {user.name}</li>
          <li>Email: {user.email} </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;

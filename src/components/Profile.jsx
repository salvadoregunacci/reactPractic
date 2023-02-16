import s from "./styles/Profile.module.css";

function Profile() {
  return (
    <main id={s.content}>
      <div className={s.banner}></div>
      <div className={s.profile__row}>
        <div className={s.photo}>
          <img src="https://images.unsplash.com/photo-1549237511-bbe6a0979d6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="user photo"/>
        </div>

        <div className={s.profile__info}>
          <div className={s.name}>
            <span id={s.firstname}>John</span>
            <span id={s.lastname}>Brown</span>
          </div>
          <div className={s.profile__bio}>
            <div className={s.profile__bio_item}><label>Birthday:</label> <span id={s.birthday}>31.01.1985</span></div>
            <div className={s.profile__bio_item}><label>Street:</label> <span id={s.city}>Boston</span></div>
            <div className={s.profile__bio_item}><label>Company:</label> <span id={s.company}>Google corp.</span></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
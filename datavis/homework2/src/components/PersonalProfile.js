export default function PersonalProfile({profile}){
    return(
        <section class="personal-profile">
            <h2 class="section-header">{profile.title}</h2>
            <p>{profile.content}</p>
        </section>
    )
}
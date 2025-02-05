export default function Header({personalInfo, contactInfo}) {
    return(
        <header>
            <div class="header">
                <div class="personal-info">
                    <h1 class="name">{personalInfo.name}</h1>
                    <p class="title">{personalInfo.occupation}</p>
                </div>
                <ul class="contact-info">
                    <li>Email: 
                        <a href={contactInfo.email}>{contactInfo.email}</a>
                    </li>
                    <li>Web: {contactInfo.web}</li>
                    <li>Mobile {contactInfo.mobile}</li>
                </ul>
            </div>
        </header>
    )
}
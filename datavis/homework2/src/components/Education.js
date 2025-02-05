export default function Education({education}) {
    return(
        <section class="education">
            <h2 class="section-header">{education.title}</h2>
            <ul class="education-list">
                <li>
                    <h3>{education.bsInstitution}</h3>
                    <p>{education.bsDegree}</p>
                    <p>{education.bsDates}</p>
                    <p>GPA: {education.bsGpa}</p>
                </li>
                <li>
                    <h3>{education.msInstitution}</h3>
                    <p>{education.msDegree}</p>
                    <p>{education.msDates}</p>
                    <p>GPA: {education.msGpa}</p>
                </li>
            </ul>
        </section>
    )
}
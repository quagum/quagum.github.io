export default function WorkExperience({workExperience}) {
    return(
        <section class="work-experience">
            <h2 class="section-header">{workExperience.title}</h2>
            <ul class="job-list">
                <li class="job">
                    <h3>{workExperience.job1}</h3>
                    <p>{workExperience.job1Content}</p>
                </li>
                <li class="job">
                    <h3>{workExperience.job2}</h3>
                    <p>{workExperience.job2Content}</p>
                </li>
            </ul>
        </section>
    )
}
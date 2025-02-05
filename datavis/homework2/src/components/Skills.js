export default function Skills({keySkills}) {
    let skillsList = []
    for (let i = 0; i < 9; i++) {
        skillsList.push(keySkills.content1);
    }
    
    return(
        <section class="key-skills">
            <h2 class="section-header">{keySkills.title}</h2>
            <ul class="skills-list">
            {skillsList.map((item, index) => 
                (
                    <li>{item}</li>
                )
            )}
            </ul>  
        </section>
    )
}
import Link from 'next/link'

const AboutPage = () => {
    const details = [

        { id: 1, name: 'Yash', role: 'Senior Developer' },

        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },

        { id: 3, name: 'Suresh', role: 'Frontend Developer' }

    ]
    return <>
        <h1>This is About us Page:</h1>
        {details.map((person) => (
            <ul>
                <li>
                    <Link href={`/about/${person.id.toString()}`}>{person.name}</Link>
                </li>
            </ul>
        ))}
    </>
}

export default AboutPage;
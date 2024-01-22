import { useRouter } from 'next/router';

const DeveloperPage = () => {
    const details = [

        { id: 1, name: 'Yash', role: 'Senior Developer' },

        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },

        { id: 3, name: 'Suresh', role: 'Frontend Developer' }

    ]
    const router = useRouter();
    const id = router.query.id;
    const userDetails = details.find((person) => {
        return person.id.toString() === id
    });


    return <>
        <h3>{userDetails.name}</h3>
        <h3>{userDetails.role}</h3>
    </>
}

export default DeveloperPage;
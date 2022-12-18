import { GetServerSideProps } from 'next'
import ExpandableCard from '../components/ExpandableCard'
import { INameValuePairProps } from '../components/NameValuePair'
import styles from '../styles/PlantList.module.css'
const PlantList = ({ plants }: any) => {
    return <main className={styles.main}>
        {plants.map((plant: any) => {
            const hiddenList: [INameValuePairProps] = [
                { name: "Light Category", value: plant?.lightCategory }
            ]
            return <ExpandableCard key={plant.plantID} image={plant?.plantPicUri} title={plant?.commonName} hiddenList={hiddenList} />
        })}
    </main>
}

export default PlantList

export const getServerSideProps: GetServerSideProps = async (context) => {
    const resp = await fetch('http://localhost:3000/api/plants');
    const { plants } = await resp.json();
    return {
        props: { plants }, // will be passed to the page component as props
    }
}
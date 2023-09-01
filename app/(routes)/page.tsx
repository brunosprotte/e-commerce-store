import getBillboard from "@/actions/get-billboard"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"

export const revalidate = 0

const HomePage = async () => {

    const billboard = await getBillboard("93dcf756-64c6-4af1-bc34-70ded07778ff")

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
        </Container>
    )
}

export default HomePage
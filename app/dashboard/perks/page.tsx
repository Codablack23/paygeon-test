import MainLayout from "../components/MainLayout";

export default function Page(){
    return (
        <MainLayout active="perks">
            <iframe
            width="100%"
            height="100vh"
            style={{
                minHeight:"100vh"
            }}
            src="https://embed.nachonacho.com/perkHub/tij2md7j0tjinenlgblcba"
            title="NachoNacho PerkHub">
            </iframe>
        </MainLayout>
    )
}
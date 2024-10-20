import CardPlaceContent from "@/components/CardPlaceContent"
import { CardHeader } from "@/components/ui/card"

const PlaceDetails = () => {
    const listDestinationContent = [{
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1724268508231-451abbb9e4b4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "Kathmandu, Nepal",
        title: "Title 1",
        description: "Content 1. Lorem ispur.Content 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem  Content 1. Lorem ispur.Content 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispur Content 1. Lorem ispur.Content 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispur Content 1. Lorem ispur.Content 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispur.Content 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispur Content 1. Lorem ispur.Content 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispur",
    },
    {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1724268508231-451abbb9e4b4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "Kathmandu, Nepal",
        title: "Title 2",
        description: "Content 1. Lorem ispur.Content 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispurContent 1. Lorem ispur",
    }]

    return (
        <div className="mt-32">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold font-serif text-[#397D54] p-1">Place Details</h1>
                <p className="text-xl text-[#5B5B5B] p-1">Places vừa chọn ở trang trước</p>
                <hr />
            </div>
            <div className="px-12">
                <div>
                    <CardHeader>
                        <h2 className="text-2xl font-bold font-serif text-[#397D54]">Map Views</h2>
                        <p className="text-[#404040]">See your destination in a effective map</p>
                    </CardHeader>
                    <div className="flex flex-col items-center h-[80vh]">
                        <iframe
                            className="h-full w-full px-12"
                            title="Mapview"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.584811421889!2d109.21657047501992!3d13.803884386593412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6bf778c80973%3A0x8a7d0b5aa0af29c7!2zxJDhuqFpIGjhu41jIEZQVCBRdXkgTmjGoW4!5e0!3m2!1svi!2s!4v1729405174251!5m2!1svi!2s"
                        >
                        </iframe>
                    </div>
                </div>
                <div>
                    <CardHeader>
                        <h2 className="text-2xl font-bold font-serif text-[#397D54]">About Destination</h2>
                        <p className="text-[#404040]">See what is interesting in this place</p>
                    </CardHeader>
                    {listDestinationContent.map((content) => {
                        return (
                            <CardPlaceContent
                                key={content.id}
                                imageUrl={content.imageUrl}
                                location={content.location}
                                title={content.title}
                                description={content.description}
                                linkContent="Click to rate"
                                linkTarget="/reviews"
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PlaceDetails

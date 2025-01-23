import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const About = () => {
  return (
    <section id="about" className="py-16 animate-fadeIn">
      <Card className="overflow-hidden bg-accent text-accent-foreground">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">About Me</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center gap-8">
          <Avatar className="w-48 h-48 animate-scaleIn">
            {("https://cdn.discordapp.com/attachments/873191857432178841/1331175271457357856/12.jpg?ex=6790a914&is=678f5794&hm=eb699fd4c367233c844f462c3f3e1de0c9a5d546782ffc26a81266e2a15fbee0&"
              ?.length ?? 0) > 0 && (
              <AvatarImage
                src="https://cdn.discordapp.com/attachments/873191857432178841/1331175271457357856/12.jpg?ex=6790a914&is=678f5794&hm=eb699fd4c367233c844f462c3f3e1de0c9a5d546782ffc26a81266e2a15fbee0&"
                alt="Thanabadee Thapha's profile picture"
                onError={(e) => console.error("Error loading image:", e)}
              />
            )}
            <AvatarFallback>TT</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Thanabadee Thapha</h2>
            <p className="text-muted-foreground">
              I am deeply passionate about technology and have a strong enthusiasm for web development. Crafting modern,
              responsive, and user-friendly websites is not just my profession—it's my calling. With a focus on
              leveraging cutting-edge technologies and best practices, I strive to deliver web solutions that are both
              visually stunning and highly functional. My goal is to create digital experiences that leave a lasting
              impression while solving real-world challenges.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default About


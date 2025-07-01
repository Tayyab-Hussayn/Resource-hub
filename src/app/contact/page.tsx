import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl font-bold">Contact Me</h1>
        <p className="text-muted-foreground mt-2 text-xl">
          Have a question, suggestion, or just want to say hi?
        </p>
      </div>
      <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="What's this about?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message here..." rows={6} />
            </div>
            <Button type="submit" className="w-full" size="lg">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

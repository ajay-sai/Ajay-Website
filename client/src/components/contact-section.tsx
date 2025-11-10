import { useState } from "react";
import { Mail, Linkedin, Github, Send, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real implementation, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-secondary/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-1 h-1 bg-primary/50 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent/50 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text scroll-animate">
            Schedule a Meeting
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 scroll-animate"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate">
            Ready to collaborate on innovative data science projects? Let's discuss how advanced analytics and machine learning can transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-4 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">sai.ajaysai@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-4 group">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <Phone className="text-green-500" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a 
                      href="tel:240-360-7905" 
                      className="text-muted-foreground hover:text-green-500 transition-colors"
                    >
                      (240) 360-7905
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-4 group">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Linkedin className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <a 
                      href="https://www.linkedin.com/in/ajay-sai/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      linkedin.com/in/ajay-sai
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-4 group">
                  <div className="w-12 h-12 bg-foreground/20 rounded-full flex items-center justify-center group-hover:bg-foreground/30 transition-colors">
                    <Github className="text-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <a 
                      href="https://github.com/ajay-sai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      github.com/ajay-sai
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Cal.com Booking Section */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Schedule a Meeting</h3>
              <p className="text-muted-foreground mb-6">
                Ready to discuss your project? Book a convenient time slot that works for you.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <a
                  href="https://cal.com/ajay-sai/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg p-4 block"
                  data-testid="button-book-15min"
                >
                  <div className="flex items-center justify-center space-x-2 relative z-10">
                    <Calendar className="h-5 w-5" />
                    <span className="font-semibold">15 Min Chat</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </a>

                <a
                  href="https://cal.com/ajay-sai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg p-4 block"
                  data-testid="button-book-30min"
                >
                  <div className="flex items-center justify-center space-x-2 relative z-10">
                    <Calendar className="h-5 w-5" />
                    <span className="font-semibold">30 Min Meeting</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </a>

                <a
                  href="https://cal.com/ajay-sai/working-session"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg p-4 block"
                  data-testid="button-book-60min"
                >
                  <div className="flex items-center justify-center space-x-2 relative z-10">
                    <Calendar className="h-5 w-5" />
                    <span className="font-semibold">60 Min Session</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="quantum-card p-8 rounded-xl shadow-lg scroll-animate">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-muted-foreground mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="bg-secondary border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-muted-foreground mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-secondary border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-muted-foreground mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or how we can collaborate..."
                  required
                  className="bg-secondary border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

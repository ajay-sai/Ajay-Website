import { useEffect, useState } from "react";

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-6 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 8 years of experience in data science and machine learning, I specialize in building 
              scalable AI solutions that drive business value. My journey began with a fascination for uncovering 
              patterns in complex datasets, which has evolved into leading cross-functional teams to implement 
              enterprise-level data strategies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I have successfully deployed predictive models that increased revenue by 40%, developed recommendation 
              systems serving millions of users, and led the digital transformation initiatives at Fortune 500 companies. 
              My expertise spans the entire data science lifecycle, from problem formulation to model deployment and monitoring.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 quantum-card rounded-lg consciousness-expand">
                <div className="text-3xl font-bold text-primary quantum-glow">150+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 quantum-card rounded-lg consciousness-expand">
                <div className="text-3xl font-bold text-accent quantum-glow">8+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="Advanced data visualization and quantum computing concepts"
                className="rounded-2xl shadow-2xl w-full h-auto reality-bend"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl holographic-shimmer"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full quantum-float opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full quantum-float opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-primary rounded-full quantum-float opacity-70" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

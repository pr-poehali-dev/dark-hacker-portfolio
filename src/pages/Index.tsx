import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    'Программист',
    'Веб-разработчик', 
    'Хакер',
    'Создатель цифровых миров'
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= currentText.length) {
        setDisplayText(currentText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentTextIndex]);

  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Cybersecurity', level: 75 },
    { name: 'Database', level: 88 }
  ];

  const projects = [
    {
      title: 'Secure Web Portal',
      description: 'Защищенный веб-портал с многофакторной аутентификацией',
      tech: ['React', 'Node.js', 'MongoDB'],
      status: 'Active',
      image: '/img/8ba6cb9d-cfb0-4b3b-a778-137f16848595.jpg'
    },
    {
      title: 'AI Chat Bot',
      description: 'Интеллектуальный чат-бот с машинным обучением',
      tech: ['Python', 'TensorFlow', 'FastAPI'],
      status: 'Completed',
      image: '/img/8df681d7-55da-4906-82d5-b2f94626f94c.jpg'
    },
    {
      title: 'Hacker Workspace',
      description: 'Киберпанк рабочее пространство с множественными мониторами',
      tech: ['Hardware', 'Linux', 'Security'],
      status: 'Development',
      image: '/img/a27970f5-e4f8-4d02-ade7-392a66ab2804.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Matrix background effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-green-400/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-green-400">
              &gt; root@portfolio:~$
            </div>
            <div className="flex space-x-6">
              <a href="#home" className="hover:text-green-300 transition-colors">Главная</a>
              <a href="#about" className="hover:text-green-300 transition-colors">О себе</a>
              <a href="#projects" className="hover:text-green-300 transition-colors">Проекты</a>
              <a href="#contact" className="hover:text-green-300 transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-green-400">
              &gt; HELLO_WORLD
            </h1>
            <div className="text-2xl md:text-3xl">
              <span className="text-gray-400">Я </span>
              <span className="text-green-400 border-r-2 border-green-400 animate-blink">
                {displayText}
              </span>
            </div>
          </div>
          
          <div className="bg-black/50 border border-green-400/30 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-green-300 mb-2">
              <span className="text-gray-400">root@portfolio:~$</span> whoami
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              Создаю цифровые решения, взламываю проблемы кода,
              <br />
              строю мосты между идеями и реальностью.
              <br />
              Специализируюсь на веб-разработке и безопасности.
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Button 
              variant="outline" 
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
            >
              <Icon name="Download" className="w-4 h-4 mr-2" />
              Скачать CV
            </Button>
            <Button 
              className="bg-green-400 text-black hover:bg-green-300"
            >
              <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-400">
            &gt; cat about.txt
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="bg-black/50 border-green-400/30">
                <CardHeader>
                  <CardTitle className="text-green-400">Навыки</CardTitle>
                  <CardDescription className="text-gray-400">
                    Мой технический стек
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-green-400">{skill.name}</span>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-black/50 border-green-400/30">
                <CardHeader>
                  <CardTitle className="text-green-400">Статистика</CardTitle>
                  <CardDescription className="text-gray-400">
                    Цифры моей деятельности
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">50+</div>
                      <div className="text-gray-400">Проектов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">3+</div>
                      <div className="text-gray-400">Лет опыта</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">99%</div>
                      <div className="text-gray-400">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">24/7</div>
                      <div className="text-gray-400">Online</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-400">
            &gt; ls projects/
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-black/50 border-green-400/30 hover:border-green-400/50 transition-all duration-300 group">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <Badge 
                      variant={project.status === 'Active' ? 'default' : 'secondary'}
                      className={`absolute top-4 right-4 ${project.status === 'Active' ? 'bg-green-400 text-black' : 'bg-gray-700 text-gray-300'}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <CardTitle className="text-green-400 mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-green-400/50 text-green-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                      <Icon name="Eye" className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                      <Icon name="Github" className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-400">
            &gt; netstat -contact
          </h2>
          
          <Card className="bg-black/50 border-green-400/30">
            <CardHeader>
              <CardTitle className="text-green-400">Установить соединение</CardTitle>
              <CardDescription className="text-gray-400">
                Готов к новым вызовам и проектам
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">your.email@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">+7 (xxx) xxx-xx-xx</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Москва, Россия</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Github" className="w-5 h-5 text-green-400" />
                    <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                      github.com/yourusername
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Linkedin" className="w-5 h-5 text-green-400" />
                    <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Twitter" className="w-5 h-5 text-green-400" />
                    <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                      @yourusername
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-green-400/20">
                <div className="text-green-300 mb-2">
                  <span className="text-gray-400">root@portfolio:~$</span> echo "Готов к работе!"
                </div>
                <div className="text-gray-300">
                  Открыт для новых проектов и интересных задач.
                  <br />
                  Давайте создадим что-то крутое вместе! 🚀
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-green-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            <span className="text-green-400">root@portfolio:~$</span> 
            {" "}© 2024 Все права защищены. Создано с 💚 и кофе.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
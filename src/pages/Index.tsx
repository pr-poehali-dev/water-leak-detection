import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Icon name="Droplets" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">TDI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('technologies')} className="text-sm font-medium hover:text-primary transition-colors">
                Технологии
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection('advantages')} className="text-sm font-medium hover:text-primary transition-colors">
                Преимущества
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90">
                Контакты
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section id="home" className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
                TECHNICAL DIAGNOSTICS INTERNATIONAL
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Профессиональные решения для водопроводных сетей
              </p>
              <div className="pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6" onClick={() => scrollToSection('contact')}>
                  Получить консультацию
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/a937d7eb-f2b8-43e5-a50d-a6a5a25872cc/files/4df3e675-e247-4f3b-ba84-ef6ef3a10fcd.jpg" 
                alt="Диагностика водопроводных сетей"
                className="aspect-square rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Комплексные проверки водопроводных сетей
            </h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Обнаружение и точное определение мест скрытых подземных утечек — наиболее логичное и эффективное решение этой проблемы!
            </p>
            <p className="text-base max-w-2xl mx-auto opacity-80 pt-2">
              Если проводить эту работу систематически, экономия воды и финансовых средств будет расти в геометрической прогрессии из года в год.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Предоставляем услуги высочайшего качества в области диагностики водопроводных сетей
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Search" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Обнаружение скрытых утечек</CardTitle>
                <CardDescription className="text-base">
                  Комплексная диагностика водопроводных сетей с использованием передовых технологий
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Точное определение местоположения утечек</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Минимальные затраты на раскопки</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Быстрая диагностика больших территорий</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Локализация и отслеживание</CardTitle>
                <CardDescription className="text-base">
                  Прецизионное определение путей распространения утечек по трубопроводу
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Картирование проблемных зон</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Мониторинг состояния сетей</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Прогнозирование потенциальных проблем</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Технологии</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Разработка и внедрение инновационных систем обнаружения утечек
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-4 p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Radio" size={40} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg">Акустическая диагностика</h3>
              <p className="text-sm text-muted-foreground">Высокоточное обнаружение звуков утечек</p>
            </div>
            <div className="text-center space-y-4 p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Crosshair" size={40} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg">Корреляционный анализ</h3>
              <p className="text-sm text-muted-foreground">Точная локализация места повреждения</p>
            </div>
            <div className="text-center space-y-4 p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Gauge" size={40} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg">Мониторинг давления</h3>
              <p className="text-sm text-muted-foreground">Контроль параметров водопроводной сети</p>
            </div>
            <div className="text-center space-y-4 p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Smartphone" size={40} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg">Цифровые системы</h3>
              <p className="text-sm text-muted-foreground">Автоматизация процесса диагностики</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">О компании</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-primary">Technical Diagnostics International</span> — одна из ведущих израильских компаний в области проверки водопроводных сетей на предмет обнаружения и точного определения мест скрытых подземных утечек.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                TDI существует на израильском рынке уже более <span className="font-bold text-primary">22 лет</span>. В 1988 году основатель компании Владимир Фрумс начал предоставлять услуги по обнаружению утечек воды, одновременно разрабатывая новые технологии и системы.
              </p>
              <div className="pt-4 space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Target" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Предоставление услуг</h4>
                    <p className="text-muted-foreground">Обнаружение скрытых утечек, их локализация и отслеживание по трубопроводу</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Lightbulb" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Исследования и разработки</h4>
                    <p className="text-muted-foreground">Постоянное совершенствование технологий обнаружения утечек</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/a937d7eb-f2b8-43e5-a50d-a6a5a25872cc/files/f74ff00a-8b86-4643-a198-7e021f8ee6cb.jpg" 
                alt="Команда TDI"
                className="aspect-[4/3] rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-2xl flex items-end justify-center pb-8">
                <div className="text-center space-y-2">
                  <div className="text-7xl font-black text-white">22+</div>
                  <div className="text-2xl font-bold text-white">лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Преимущества</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Почему стоит выбрать Technical Diagnostics International
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Экономия средств</h3>
              <p className="opacity-90">
                Систематическая проверка обеспечивает рост экономии воды и финансов в геометрической прогрессии
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Высокое качество</h3>
              <p className="opacity-90">
                Предоставляем услуги высочайшего качества с применением передовых технологий
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Опытная команда</h3>
              <p className="opacity-90">
                Более 22 лет успешной работы на рынке и постоянное развитие компетенций
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Получите профессиональную консультацию по диагностике водопроводных сетей
            </p>
          </div>
          <Card className="border-2">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Ваше имя" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="email@example.com" className="h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input type="tel" placeholder="+972" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea placeholder="Опишите вашу задачу..." className="min-h-32" />
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg h-14">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <h4 className="font-bold">Email</h4>
              <p className="text-muted-foreground text-sm">info@tdi.co.il</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <h4 className="font-bold">Телефон</h4>
              <p className="text-muted-foreground text-sm">+972-XX-XXX-XXXX</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h4 className="font-bold">Адрес</h4>
              <p className="text-muted-foreground text-sm">Израиль</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Icon name="Droplets" size={32} className="text-white" />
              <span className="text-2xl font-bold">TDI</span>
            </div>
            <p className="text-sm opacity-80">
              © 2024 Technical Diagnostics International. Все права защищены.
            </p>
            <div className="flex space-x-4">
              <button className="hover:text-accent transition-colors">
                <Icon name="Linkedin" size={24} />
              </button>
              <button className="hover:text-accent transition-colors">
                <Icon name="Facebook" size={24} />
              </button>
              <button className="hover:text-accent transition-colors">
                <Icon name="Twitter" size={24} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
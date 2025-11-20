import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-muted">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            Обувь для Лапок
          </Link>
          <div className="flex gap-8">
            <Link to="/" className="text-primary font-semibold">
              Главная
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              Обо мне
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Тепло и Уют
                <br />
                <span className="text-primary">для Маленьких Лап</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Ручная работа с любовью. Каждая пара ботиночек создается индивидуально 
                для комфорта вашего питомца.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              >
                Узнать мою историю
                <Icon name="ArrowRight" size={20} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white/40 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              Почему выбирают нас
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300 animate-scale-in">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Hand" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ручная Работа
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Каждая пара ботиночек создается вручную с вниманием к деталям 
                  и заботой о комфорте вашего питомца.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Ruler" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Индивидуальный Размер
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Подбираем идеальную посадку под размер лапки вашего любимца. 
                  Никакого дискомфорта!
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Качественные Материалы
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Используем только безопасные гипоаллергенные материалы, 
                  приятные для нежных лап.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="animate-fade-in">
              <Icon name="Heart" size={64} className="text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Счастливые Лапки — Довольные Хозяева
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Более 50 счастливых питомцев уже носят нашу обувь. 
                Присоединяйтесь к нашей дружной семье!
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all hover:scale-105"
              >
                Читать полную историю
                <Icon name="BookOpen" size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white/80 backdrop-blur-md border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Обувь для Лапок. Создано с любовью к питомцам.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

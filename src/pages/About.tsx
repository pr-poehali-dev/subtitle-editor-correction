import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const About = () => {
  const images = [
    {
      url: 'https://cdn.poehali.dev/files/1be1be35-68d9-4cc5-a0e-f9be9b5293af.jpg',
      alt: 'Собака в зелени'
    },
    {
      url: 'https://cdn.poehali.dev/files/91cf9892-d6a6-4edb-b86a-ef67dae672b9.jpg',
      alt: 'Собака в полосатой одежде'
    },
    {
      url: 'https://cdn.poehali.dev/files/cec94e4a-1793-458d-a313-e6a9a3452fb0.jpg',
      alt: 'Собака в ботиночках'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-muted">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            Обувь для Лапок
          </Link>
          <div className="flex gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </Link>
            <Link to="/about" className="text-primary font-semibold">
              Обо мне
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-center">
              Моя История
            </h1>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  Всё началось с обычной прогулки зимним утром. Мой маленький четвероногий друг, 
                  чихуахуа по имени Марсик, начал поджимать лапки от холода. Его крошечные лапы 
                  мёрзли на морозе, и мне стало невероятно жаль его.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  В тот момент я поняла: нужно что-то делать. Я начала искать обувь для собак в 
                  магазинах, но ничего не подходило по размеру. Магазинные ботиночки были либо 
                  слишком велики, либо неудобны. Тогда я решила: "А почему бы не попробовать 
                  сшить их самой?"
                </p>

                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  Первые ботиночки получились... скажем так, не идеальными. Марсик ходил в них 
                  как робот, высоко поднимая лапы. Но я не сдавалась! С каждой новой парой я 
                  совершенствовала дизайн, подбирала более мягкие материалы, улучшала крепления.
                </p>

                <p className="text-lg leading-relaxed text-foreground/90">
                  Сегодня мои ботиночки носят десятки собачек в нашем районе. Я использую только 
                  качественные гипоаллергенные материалы, делаю индивидуальную подгонку по лапке, 
                  и самое главное — вижу счастливые мордочки питомцев, которые теперь могут 
                  комфортно гулять в любую погоду!
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Наши Приключения
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <Icon name="Heart" size={64} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Хотите такие же ботиночки для вашего питомца?
                  </h3>
                  <p className="text-white/90 text-lg">
                    Я с радостью помогу подобрать идеальный вариант для вашего любимца. 
                    Каждая пара создается с любовью и заботой!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default About;

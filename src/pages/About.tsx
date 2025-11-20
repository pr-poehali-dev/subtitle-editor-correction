import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const About = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [editMode, setEditMode] = useState(false);
  
  const [title, setTitle] = useState('Моя История');
  const [paragraph1, setParagraph1] = useState('Всё началось с обычной прогулки зимним утром. Мой маленький четвероногий друг, чихуахуа по имени Марсик, начал поджимать лапки от холода. Его крошечные лапы мёрзли на морозе, и мне стало невероятно жаль его.');
  const [paragraph2, setParagraph2] = useState('В тот момент я поняла: нужно что-то делать. Я начала искать обувь для собак в магазинах, но ничего не подходило по размеру. Магазинные ботиночки были либо слишком велики, либо неудобны. Тогда я решила: "А почему бы не попробовать сшить их самой?"');
  const [paragraph3, setParagraph3] = useState('Первые ботиночки получились... скажем так, не идеальными. Марсик ходил в них как робот, высоко поднимая лапы. Но я не сдавалась! С каждой новой парой я совершенствовала дизайн, подбирала более мягкие материалы, улучшала крепления.');
  const [paragraph4, setParagraph4] = useState('Сегодня мои ботиночки носят десятки собачек в нашем районе. Я использую только качественные гипоаллергенные материалы, делаю индивидуальную подгонку по лапке, и самое главное — вижу счастливые мордочки питомцев, которые теперь могут комфортно гулять в любую погоду!');
  
  const [videoUrl, setVideoUrl] = useState('');
  const [ctaTitle, setCtaTitle] = useState('Хотите такие же ботиночки для вашего питомца?');
  const [ctaText, setCtaText] = useState('Я с радостью помогу подобрать идеальный вариант для вашего любимца. Каждая пара создается с любовью и заботой!');
  
  const [images, setImages] = useState([
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
  ]);

  useEffect(() => {
    const savedData = localStorage.getItem('aboutPageData');
    if (savedData) {
      const data = JSON.parse(savedData);
      setTitle(data.title || title);
      setParagraph1(data.paragraph1 || paragraph1);
      setParagraph2(data.paragraph2 || paragraph2);
      setParagraph3(data.paragraph3 || paragraph3);
      setParagraph4(data.paragraph4 || paragraph4);
      setVideoUrl(data.videoUrl || '');
      setCtaTitle(data.ctaTitle || ctaTitle);
      setCtaText(data.ctaText || ctaText);
      setImages(data.images || images);
    }
  }, []);

  const saveData = () => {
    const data = {
      title,
      paragraph1,
      paragraph2,
      paragraph3,
      paragraph4,
      videoUrl,
      ctaTitle,
      ctaText,
      images
    };
    localStorage.setItem('aboutPageData', JSON.stringify(data));
    setEditMode(false);
  };

  const handleImageUrlChange = (index: number, url: string) => {
    const newImages = [...images];
    newImages[index].url = url;
    setImages(newImages);
  };

  const handleImageAltChange = (index: number, alt: string) => {
    const newImages = [...images];
    newImages[index].alt = alt;
    setImages(newImages);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100">
      {!isAdmin && (
        <Button
          onClick={() => setIsAdmin(true)}
          className="fixed top-4 right-4 z-50"
          size="sm"
          variant="outline"
        >
          <Icon name="Settings" size={16} className="mr-2" />
          Админ
        </Button>
      )}

      {isAdmin && (
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <Button
            onClick={() => setEditMode(!editMode)}
            size="sm"
            variant={editMode ? "default" : "outline"}
          >
            <Icon name={editMode ? "Eye" : "Edit"} size={16} className="mr-2" />
            {editMode ? 'Просмотр' : 'Редактировать'}
          </Button>
          {editMode && (
            <Button onClick={saveData} size="sm">
              <Icon name="Save" size={16} className="mr-2" />
              Сохранить
            </Button>
          )}
          <Button
            onClick={() => setIsAdmin(false)}
            size="sm"
            variant="ghost"
          >
            <Icon name="X" size={16} />
          </Button>
        </div>
      )}

      <main className="pt-20 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            {editMode ? (
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-5xl md:text-6xl font-bold text-center mb-8 bg-white/80"
              />
            ) : (
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-center">
                {title}
              </h1>
            )}
            
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12">
              <div className="prose prose-lg max-w-none space-y-6">
                {editMode ? (
                  <>
                    <Textarea
                      value={paragraph1}
                      onChange={(e) => setParagraph1(e.target.value)}
                      className="text-lg bg-white min-h-[100px]"
                    />
                    <Textarea
                      value={paragraph2}
                      onChange={(e) => setParagraph2(e.target.value)}
                      className="text-lg bg-white min-h-[100px]"
                    />
                    <Textarea
                      value={paragraph3}
                      onChange={(e) => setParagraph3(e.target.value)}
                      className="text-lg bg-white min-h-[100px]"
                    />
                    <Textarea
                      value={paragraph4}
                      onChange={(e) => setParagraph4(e.target.value)}
                      className="text-lg bg-white min-h-[100px]"
                    />
                  </>
                ) : (
                  <>
                    <p className="text-lg leading-relaxed text-foreground/90">{paragraph1}</p>
                    <p className="text-lg leading-relaxed text-foreground/90">{paragraph2}</p>
                    <p className="text-lg leading-relaxed text-foreground/90">{paragraph3}</p>
                    <p className="text-lg leading-relaxed text-foreground/90">{paragraph4}</p>
                  </>
                )}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Видео о Нас
              </h2>
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-4 shadow-xl mb-12">
                {editMode ? (
                  <div className="mb-4">
                    <label className="text-sm font-medium mb-2 block">Ссылка на видео (YouTube, Vimeo и т.д.)</label>
                    <Input
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      placeholder="https://www.youtube.com/embed/..."
                      className="bg-white"
                    />
                  </div>
                ) : null}
                
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                  {videoUrl ? (
                    <iframe
                      src={videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="text-center">
                      <Icon name="Video" size={64} className="text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground text-lg">
                        {editMode ? 'Вставьте ссылку на видео выше' : 'Добавьте ссылку на видео'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Наши Приключения
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <div key={index} className="space-y-2">
                    {editMode && (
                      <>
                        <Input
                          value={image.url}
                          onChange={(e) => handleImageUrlChange(index, e.target.value)}
                          placeholder="URL изображения"
                          className="text-sm bg-white"
                        />
                        <Input
                          value={image.alt}
                          onChange={(e) => handleImageAltChange(index, e.target.value)}
                          placeholder="Описание"
                          className="text-sm bg-white"
                        />
                      </>
                    )}
                    <div 
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
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 rounded-3xl p-8 md:p-12 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <Icon name="Heart" size={64} className="text-white" />
                </div>
                <div className="flex-1">
                  {editMode ? (
                    <>
                      <Input
                        value={ctaTitle}
                        onChange={(e) => setCtaTitle(e.target.value)}
                        className="text-2xl font-bold mb-3 bg-white/20 text-white placeholder:text-white/60"
                      />
                      <Textarea
                        value={ctaText}
                        onChange={(e) => setCtaText(e.target.value)}
                        className="text-white/90 text-lg bg-white/20 placeholder:text-white/60"
                      />
                    </>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold mb-3">{ctaTitle}</h3>
                      <p className="text-white/90 text-lg">{ctaText}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

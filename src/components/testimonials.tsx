import { useTranslations } from 'next-intl';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Separator } from './ui/separator';

export default function Testimonials() {
  const t = useTranslations('Testimonials');

  return (
    <section className="grid grid-cols-1 space-x-4 py-16 md:px-8 lg:grid-cols-3">
      <Card className="flex flex-col justify-between border-transparent bg-transparent">
        <CardContent>
          <CardHeader>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {t('Item1.h4')}
            </h4>
          </CardHeader>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            {t('Item1.p1')}
          </blockquote>
        </CardContent>
        <CardFooter>
          <div className="flex">
            <p className="font-bold">{t('Item1.p2')} &nbsp;</p>
            <p className="text-muted-foreground">{t('Item1.p3')}</p>
          </div>
        </CardFooter>
      </Card>
      <Separator w-full className="lg:hidden" />
      <Card className="flex flex-col justify-between border-none bg-transparent">
        {' '}
        <CardContent>
          <CardHeader>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {t('Item2.h4')}
            </h4>
          </CardHeader>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            {t('Item2.p1')}
          </blockquote>
        </CardContent>
        <CardFooter>
          <div className="flex">
            <p className="font-bold">{t('Item2.p2')} &nbsp;</p>
            <p className="text-muted-foreground">{t('Item2.p3')}</p>
          </div>
        </CardFooter>
      </Card>
      <Separator w-full className="lg:hidden" />
      <Card className="flex flex-col justify-between border-none bg-transparent">
        {' '}
        <CardContent>
          <CardHeader>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {t('Item3.h4')}
            </h4>
          </CardHeader>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            {t('Item3.p1')}
          </blockquote>
        </CardContent>
        <CardFooter>
          <div className="flex">
            <p className="font-bold">{t('Item3.p2')} &nbsp;</p>
            <p className="text-muted-foreground">{t('Item3.p3')}</p>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}

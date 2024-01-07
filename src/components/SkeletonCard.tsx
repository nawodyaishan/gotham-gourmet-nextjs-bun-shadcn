import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonCard() {
  return (
    <Card className={'flex flex-col justify-between'}>
      <CardHeader className={'flex-row items-center gap-4'}>
        <Skeleton className={'h-12 w-12 rounded-full'} />
        <Skeleton className={'h-6 flex-grow'} />
      </CardHeader>
      <CardContent>
        <Skeleton className={'mt-4 h-4 flex-grow'} />
        <Skeleton className={'mt-4 h-4 flex-grow'} />
        <Skeleton className={'mt-4 h-4 w-1/2'} />
      </CardContent>
      <CardFooter>
        <Skeleton className={'h-10 w-28'} />
      </CardFooter>
    </Card>
  );
}

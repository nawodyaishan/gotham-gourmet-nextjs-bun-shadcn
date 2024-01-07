import { IRecipeData } from '@/lib/definitions/i-recipe-data';
import { recipeData } from '../../_data/recipe-data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const getRecipes = (): IRecipeData[] => {
    return recipeData;
  };
  const recipes = getRecipes();

  return (
    <main>
      <div className={'grid grid-cols-3 gap-8'}>
        {recipes.map((recipe) => (
          <Card key={recipe.id} className={'flex flex-col justify-between'}>
            <CardHeader className={'flex-row items-center gap-4'}>
              <Avatar>
                <AvatarImage
                  src={`/img/${recipe.image}`}
                  alt={'Recipe Image'}
                />
                <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>
                  {recipe.time} minutes to prepare
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{recipe.description}</CardDescription>
            </CardContent>
            <CardFooter className={'justify-between'}>
              <Button variant={'default'}>View Recipe</Button>
              {recipe.isVegan && <Badge variant={'destructive'}>Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

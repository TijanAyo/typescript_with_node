import express, {Application, Request, Response} from 'express';

const app: Application = express()

app.get('/', (req: Request, res: Response)=>{
    res.send('Running Typescript on NODE')
})

app.listen(3000 || process.env.PORT, () => console.log('Running Server on PORT'));
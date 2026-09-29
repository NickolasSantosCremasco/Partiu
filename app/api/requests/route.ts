export async function POST(request: any) {
    const data = await request.json();
    console.log(data);


    return new Response("recebido");
    

}
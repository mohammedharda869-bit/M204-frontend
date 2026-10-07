export default function Content(){
    return(
        <main className="flex-1 p-8">

      <h2 className="text-3xl font-bold">
        Liste des étudiants
      </h2>

      <div className="mt-6 grid grid-cols-3 gap-5">

       
        <div className="rounded-xl bg-white p-5 shadow">
          <h3 className="text-lg font-bold">
            Yassine
          </h3>

          <p className="mt-2 text-slate-500">
            Note : 14 / 20
          </p>
        </div>

        
        <div className="rounded-xl bg-white p-5 shadow">
          <h3 className="text-lg font-bold">
            Youssef
          </h3>

          <p className="mt-2 text-slate-500">
            Note : 16 / 20
          </p>
        </div>

        
        <div className="rounded-xl bg-white p-5 shadow">
          <h3 className="text-lg font-bold">
            Ghita
          </h3>

          <p className="mt-2 text-slate-500">
            Note : 18 / 20
          </p>
        </div>

      </div>

    </main>
    )
}
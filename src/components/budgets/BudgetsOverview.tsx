const BudgetsOverview = () => { 
  return (
    <article className="rounded-lg bg-primary gap-2 my-4 p-8 shadow-md hover:shadow-xl transition duration-500 p-4 text-center text-white grid justify-between items-center  md:max-w-[600px]">
        <h2 className="text-xl font-bold text-2xl">Introduction to Budgets</h2>
        <p className="font-Inter font-light text-sm">Budgets help you specify how much money you'd like to spend this week, month or year. You will receive a 
            notification when you have exceeded your budget</p>
    </article>
  );
};

export default BudgetsOverview;

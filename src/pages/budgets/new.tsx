import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import validate from "../../utils/helpers/validateBudgetFields";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {addNewBudget} from "@/utils/supabaseRequests";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "sonner"
import { useNavigate } from "react-router-dom";
import { useUtilsStore } from "@/stores/utils.store";

export default function NewBudgetPage () {
    const [loading, setLoading] = useState(false);
    const updateRefetch = useUtilsStore(state => state.updateRefetch);

    const navigate = useNavigate();

    const {userId} = useAuth();

    const formik = useFormik({
        initialValues: {
            name: "",
            amount: 0,
            endsOn: "",
            note: ""
        },
        validate,
        onSubmit: async (values) => {
            setLoading(true);

            try {
                const success = await addNewBudget(userId, values);

                if(success) {
                    toast("Budget has been created.");

                    // Make the components refetch the data
                    updateRefetch("some_random_value");

                    setTimeout(() => {navigate("/dashboard")}, 2000)
                } 
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false);
            }
        }
    });

    return (
        <section className="px-4 py-8 w-screen overflow-y-scroll h-screen flex flex-col justify-center items-center">
            <h2 className="text-2xl text-center font-Inter">Create a new budget</h2>

            <form 
            className="my-4"
            onSubmit={formik.handleSubmit}>
                <article className="grid md:grid-cols-2 gap-2">
                    <article>
                        <label htmlFor="name">
                            Budget Name
                        </label>
                    <Input
                        type="text"
                        placeholder="Fanum Tax"
                        className="p-4"
                        {...formik.getFieldProps("name")}
                    />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-danger text-md">{formik.errors.name}</div>
                        ) : null}
                    </article>
                    <article>
                         <label htmlFor="name">
                            Amount
                        </label>
                    <Input
                        type="number"
                        placeholder="0"
                        className="p-4"
                        {...formik.getFieldProps("amount")}
                    />
                           {formik.touched.amount && formik.errors.amount ? (
         <div className="text-danger text-md">{formik.errors.amount}</div>
       ) : null}
                    </article>
                </article>

                <article className="my-2">
                     <label htmlFor="name">
                            Budget ends on
                        </label>
                    <Input
                        type="date"
                        placeholder="End date"
                        className="p-4"
                        {...formik.getFieldProps("endsOn")}
                    />
                           {formik.touched.endsOn && formik.errors.endsOn ? (
         <div className="text-danger text-md">{formik.errors.endsOn}</div>
       ) : null}
                </article>

                <article className="my-2">
                    
                    <Textarea
                        placeholder="Note"
                        className="p-4"
                        {...formik.getFieldProps("note")}
                    />
                           {formik.touched.note && formik.errors.note ? (
         <div className="text-danger text-md">{formik.errors.note}</div>
       ) : null}
                </article>

                <Button
                disabled={loading}
                type="submit"
                variant="default"
                className="bg-primary hover:bg-purple-500 transition duratrion-500 "
                >Save budget</Button>
            </form>
        </section>
    )
}
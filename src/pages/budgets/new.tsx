import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import validate from "../../utils/helpers/validateBudgetFields";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";


export default function NewBudgetPage () {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            amount: 0,
            endsOn: "",
            note: ""
        },
        validate,
        onSubmit: async (values) => {
            console.log(values);
        }
    });

    return (
        <section className="px-4 py-8 w-screen overflow-y-scroll h-screen flex flex-col justify-center items-center">
            <h2 className="text-2xl text-center font-semibold font-Inter">Create a new budget</h2>

            <form 
            className="my-4"
            onSubmit={formik.handleSubmit}>
                <article className="grid md:grid-cols-2 gap-2">
                    <article>
                    <Input
                        type="text"
                        placeholder="Budget Name"
                        className="p-4"
                        {...formik.getFieldProps("name")}
                    />
                        {formik.touched.name && formik.errors.name ? (
                            <div>{formik.errors.name}</div>
                        ) : null}
                    </article>
                    <article>
                    <Input
                        type="number"
                        placeholder="Amount"
                        className="p-4"
                        {...formik.getFieldProps("amount")}
                    />
                           {formik.touched.amount && formik.errors.amount ? (
         <div>{formik.errors.amount}</div>
       ) : null}
                    </article>
                </article>

                <article className="my-2">
                    <Input
                        type="date"
                        placeholder="End date"
                        className="p-4"
                        {...formik.getFieldProps("endsOn")}
                    />
                           {formik.touched.endsOn && formik.errors.endsOn ? (
         <div>{formik.errors.endsOn}</div>
       ) : null}
                </article>

                <article className="my-2">
                    <Textarea
                        placeholder="Note"
                        className="p-4"
                        {...formik.getFieldProps("note")}
                    />
                           {formik.touched.note && formik.errors.note ? (
         <div>{formik.errors.note}</div>
       ) : null}
                </article>

                <Button
                type="submit"
                variant="default"
                className="bg-primary hover:bg-purple-500 transition duratrion-500 "
                >Save budget</Button>
            </form>
        </section>
    )
}
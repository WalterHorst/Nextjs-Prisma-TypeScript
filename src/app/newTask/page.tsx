"use client";
import { ChangeEvent, FormEvent, useEffect } from "react";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NewTask = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      axios.get(`http://localhost:3000/api/tasks/${params.id}`).then((res) => {
        setForm({
          ...form,
          titulo: res.data.titulo,
          descripcion: res.data.descripcion,
        });
      });
    }
  }, []);

  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
  });

  const changeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const sumitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (params.id) {
      axios.put(`http://localhost:3000/api/tasks/${params.id}`, form);
    } else {
      axios
        .post("http://localhost:3000/api/tasks", form)
        .then((res) => alert(res.data))
        .catch((error) => alert(error));
    }
    setForm({ titulo: "", descripcion: "" });
    router.refresh();
    router.push("/");
  };

  const deleteHandler = () => {
    axios.delete(`http://localhost:3000/api/tasks/${params.id}`);
    router.refresh();
    router.push("/");
  };

  return (
    <div>
      <form onSubmit={sumitHandler}>
        <div>
          <label>Titulo de la tarea</label>
          <input
            onChange={changeHandler}
            type="text"
            placeholder="Titulo de la tarea"
            name="titulo"
            value={form.titulo}
          />
        </div>
        <div>
          <label>Describe la tarea</label>
          <textarea
            onChange={changeHandler}
            placeholder="Describe la tarea"
            name="descripcion"
            value={form.descripcion}
          />
        </div>
        <button type="submit">{params.id ? "Editar" : "Crear"}</button>
        {params.id && (
          <button type="button" onClick={deleteHandler}>
            Delete
          </button>
        )}
      </form>
    </div>
  );
};

export default NewTask;

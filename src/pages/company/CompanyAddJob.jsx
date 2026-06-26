import { useState } from "react";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";

import { toast } from "sonner";

import companyService from "../../services/companyService";

import PageHeader from "../../components/common/PageHeader";

export default function CompanyAddJob() {
const navigate = useNavigate();
const queryClient = useQueryClient();

const [form, setForm] = useState({
title: "",
level: "",
location: "",
description: "",
vacancy: "",
experience: "",
salaryType: "negotiable",
salaryAmount: "",
deadline: "",
});

const createJobMutation = useMutation({
  mutationFn: companyService.createJob,

  onSuccess: async (response) => {
    await queryClient.invalidateQueries();

    toast.success(
      response?.message ??
        "Job created successfully"
    );

    navigate("/company/manage-jobs");
  },

  onError: (error) => {
    toast.error(
      error?.response?.data?.message ??
        "Failed to create job"
    );
  },
});

const handleChange = (event) => {
setForm((previous) => ({
...previous,
[event.target.name]:
event.target.value,
}));
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (!form.title.trim()) {
    return toast.error(
      "Job title is required"
    );
  }

  if (!form.level) {
    return toast.error(
      "Job level is required"
    );
  }

  if (!form.location.trim()) {
    return toast.error(
      "Location is required"
    );
  }

  if (!form.experience) {
    return toast.error(
      "Experience is required"
    );
  }

  if (
    !form.vacancy ||
    Number(form.vacancy) < 1
  ) {
    return toast.error(
      "Vacancy must be at least 1"
    );
  }

  if (
    form.salaryType === "fixed" &&
    !form.salaryAmount
  ) {
    return toast.error(
      "Salary amount is required"
    );
  }

  if (!form.deadline) {
    return toast.error(
      "Application deadline is required"
    );
  }

  if (!form.description.trim()) {
    return toast.error(
      "Description is required"
    );
  }

  const salary =
    form.salaryType === "negotiable"
      ? "Negotiable"
      : form.salaryAmount;

  createJobMutation.mutate({
    title: form.title.trim(),

    level: form.level,

    location: form.location.trim(),

    description:
      form.description.trim(),

    vacancy: Number(form.vacancy),

    experience:
      form.experience,

    salary,

    deadline: form.deadline,
  });
};

return ( <div className="space-y-8">

  <PageHeader
    title="Add Job Post"
    subtitle="Create a new job opportunity"
    color="orange"
  />

  <form
    onSubmit={handleSubmit}
    className="
      bg-white
      rounded-3xl
      border
      border-slate-200
      shadow-sm
      p-6
      md:p-8
      space-y-6
    "
  >

    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        Job Title
        <span className="text-red-500 ml-1">*</span>
      </label>

      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Frontend Developer"
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          text-slate-800
          placeholder:text-slate-400
          focus:border-orange-500
          focus:outline-none
        "
      />
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Job Level
          <span className="text-red-500 ml-1">*</span>
        </label>

        <select
          name="level"
          value={form.level}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            text-slate-800
          "
        >
          <option value="">
            Select Level
          </option>

          <option value="Fresher">
            Fresher
          </option>

          <option value="Entry Level">
            Entry Level
          </option>

          <option value="Mid Level">
            Mid Level
          </option>

          <option value="Senior">
            Senior
          </option>

        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Location
          <span className="text-red-500 ml-1">*</span>
        </label>

        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Dhaka"
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            text-slate-800
            placeholder:text-slate-400
          "
        />
      </div>

    </div>

    <div className="grid md:grid-cols-2 gap-6">

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Experience
          <span className="text-red-500 ml-1">*</span>
        </label>

        <select
          name="experience"
          value={form.experience}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            text-slate-800
          "
        >
          <option value="">
            Select Experience
          </option>

          <option value="Fresher">
            Fresher
          </option>

          <option value="0-1">
            0-1 Years
          </option>

          <option value="1-2">
            1-2 Years
          </option>

          <option value="2-3">
            2-3 Years
          </option>

          <option value="3-5">
            3-5 Years
          </option>

          <option value="5-7">
            5-7 Years
          </option>

          <option value="7+">
            7+ Years
          </option>

        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Vacancy
          <span className="text-red-500 ml-1">*</span>
        </label>

        <input
          type="number"
          min="1"
          name="vacancy"
          value={form.vacancy}
          onChange={handleChange}
          placeholder="1"
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            text-slate-800
          "
        />
      </div>

    </div>

    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-3">
        Salary
        <span className="text-red-500 ml-1">*</span>
      </label>

      <div className="flex gap-6 mb-4">

        <label className="flex items-center gap-2 text-slate-700">
          <input
            type="radio"
            checked={
              form.salaryType ===
              "negotiable"
            }
            onChange={() =>
              setForm((previous) => ({
                ...previous,
                salaryType:
                  "negotiable",
              }))
            }
          />

          Negotiable
        </label>

        <label className="flex items-center gap-2 text-slate-700">
          <input
            type="radio"
            checked={
              form.salaryType ===
              "fixed"
            }
            onChange={() =>
              setForm((previous) => ({
                ...previous,
                salaryType:
                  "fixed",
              }))
            }
          />

          Fixed Salary
        </label>

      </div>

      {form.salaryType ===
        "fixed" && (
        <input
          type="number"
min="0"
step="1000"
          name="salaryAmount"
          value={
            form.salaryAmount
          }
          onChange={
            handleChange
          }
          placeholder="50000"
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            text-slate-800
            placeholder:text-slate-400
          "
        />
      )}
    </div>

    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        Application Deadline
        <span className="text-red-500 ml-1">*</span>
      </label>

      <input
        type="date"
        name="deadline"
        value={form.deadline}
        onChange={handleChange}
        min={
          new Date()
            .toISOString()
            .split("T")[0]
        }
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          text-slate-800
        "
      />
    </div>

    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        Description
        <span className="text-red-500 ml-1">*</span>
      </label>

      <textarea
        rows="6"
        name="description"
        value={
          form.description
        }
        onChange={
          handleChange
        }
        placeholder="Write job description..."
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          text-slate-800
          placeholder:text-slate-400
        "
      />
    </div>

    <button
      type="submit"
      disabled={
        createJobMutation.isPending
      }
      className="
        w-full
        rounded-xl
        bg-orange-500
        hover:bg-orange-600
        text-white
        font-bold
        py-3
        transition
      "
    >
      {createJobMutation.isPending
        ? "Publishing..."
        : "Publish Job"}
    </button>

  </form>

</div>

);
}
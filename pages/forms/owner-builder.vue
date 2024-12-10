<script setup>
const show_email_2 = ref(false);
const show_phone_2 = ref(false);

const data = ref({
  project_name: "",
  project_address: {
    street: "",
    street_2: "",
    city: "",
    state: "",
    zip: "",
  },

  homeowner: {
    first_name: "",
    last_name: "",
    email_primary: "",
    email_secondary: "",
    phone_primary: "",
    phone_secondary: "",
  },

  scope_of_work: {
    description: "",
  },
  uploaded_files: [],
});
</script>

<template>
  <!-- You can open the modal using ID.showModal() method -->

  <dialog id="owner_builder" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <FormKit
        id="login-form"
        type="form"
        :incomplete-message="false"
        @submit="submit_form"
        form-class="w-full flex flex-col gap-5 rounded-xl text-left"
        wrapper-class="w-full max-w-full"
        :actions="true"
        :submit-attrs="{
          inputClass: 'rounded w-full text-gray-50 btn btn-success',
          wrapperClass: '',
          'data-theme': `dark`,
          help: '',
          ignore: false,
        }"
      >
        <template #default="{ state }">
          <div class="flex flex-col gap-10">
            <div class="w-full">
              <!-- Username Field -->
              <FormKit
                message-class="text-red-400"
                type="text"
                name="project_name"
                label="Project Name"
                validation="required"
                outer-class="col-span-6"
                wrapper-class="w-full"
                :input-class="`input input-block input-bordered w-full`"
                v-model="data.project_name"
              />
            </div>
            <div class="flex flex-col md:flex-row gap-10">
              <div
                class="flex flex-col gap-5 md:w-1/2 p-5 border border-gray-600 rounded-xl"
              >
                <h1 class="text-xl">Homeowner Information</h1>
                <FormKit
                  message-class="text-red-400"
                  type="text"
                  name="first_name"
                  label="First Name"
                  validation="required"
                  outer-class="col-span-6"
                  wrapper-class="w-full"
                  :input-class="`input input-block input-bordered w-full`"
                  v-model="data.homeowner.first_name"
                />
                <FormKit
                  message-class="text-red-400"
                  type="text"
                  name="last_name"
                  label="Last Name"
                  validation="required"
                  outer-class="col-span-6"
                  wrapper-class="w-full"
                  :input-class="`input input-block input-bordered w-full`"
                  v-model="data.homeowner.last_name"
                />
                <FormKit
                  message-class="text-red-400"
                  type="text"
                  name="email_primary"
                  label="Email Primary"
                  validation="required"
                  outer-class="col-span-6"
                  wrapper-class="w-full"
                  :input-class="`input input-block input-bordered w-full`"
                  v-model="data.homeowner.email_primary"
                />
                <button
                  v-if="!show_email_2"
                  type="button"
                  @click="show_email_2 = !show_email_2"
                  class="btn btn-primary text-gray-50"
                >
                  {{ show_email_2 ? "Remove" : "Add" }} Secondary Email
                </button>
                <div v-if="show_email_2" class="flex flex-row items-end gap-5">
                  <FormKit
                    message-class="text-red-400"
                    type="text"
                    name="email_secondary"
                    label="Email Secondary"
                    validation="required"
                    outer-class="col-span-6 flex-1"
                    wrapper-class="w-full"
                    :input-class="`input input-block input-bordered w-full`"
                    v-model="data.homeowner.email_secondary"
                  />
                  <button
                    type="button"
                    @click="show_email_2 = !show_email_2"
                    class="btn btn-error text-gray-50"
                  >
                    X
                  </button>
                </div>
                <FormKit
                  message-class="text-red-400"
                  type="text"
                  name="phone_primary"
                  label="Phone Primary"
                  validation="required"
                  outer-class="col-span-6"
                  wrapper-class="w-full"
                  :input-class="`input input-block input-bordered w-full`"
                  v-model="data.homeowner.phone_primary"
                />
                <!-- button that toggles the show_phone_2 -->
                <button
                  v-if="!show_phone_2"
                  type="button"
                  @click="show_phone_2 = !show_phone_2"
                  class="btn btn-primary text-gray-50"
                >
                  {{ show_phone_2 ? "Remove" : "Add" }} Secondary Phone
                </button>
                <div v-if="show_phone_2" class="flex flex-row items-end gap-5">
                  <FormKit
                    message-class="text-red-400"
                    type="text"
                    name="phone_secondary"
                    label="Phone Secondary"
                    validation="required"
                    outer-class="col-span-6 flex-1"
                    wrapper-class="w-full"
                    :input-class="`input input-block input-bordered w-full`"
                    v-model="data.homeowner.phone_secondary"
                  />
                  <button
                    type="button"
                    @click="show_phone_2 = !show_phone_2"
                    class="btn btn-error text-gray-50"
                  >
                    X
                  </button>
                </div>
              </div>

              <div
                class="flex flex-col gap-5 md:w-1/2 p-5 border border-gray-600 rounded-xl"
              >
                <h1 class="text-xl">Project Address</h1>
                <FormKit
                  message-class="text-red-400"
                  type="text"
                  name="street"
                  label="Street"
                  validation="required"
                  outer-class="col-span-6"
                  wrapper-class="w-full"
                  :input-class="`input input-block input-bordered w-full`"
                  v-model="data.project_address.street"
                />

                <FormKit
                  message-class="text-red-400"
                  type="text"
                  name="street_2"
                  label="Street 2"
                  validation="required"
                  outer-class="col-span-6"
                  wrapper-class="w-full"
                  :input-class="`input input-block input-bordered w-full`"
                  v-model="data.project_address.street_2"
                />

                <FormKit
                  message-class="text-red-400"
                  type="text"
                  name="city"
                  label="City"
                  validation="required"
                  outer-class="col-span-6"
                  wrapper-class="w-full"
                  :input-class="`input input-block input-bordered w-full`"
                  v-model="data.project_address.city"
                />

                <FormKit
                  message-class="text-red-400"
                  type="text"
                  name="state"
                  label="State"
                  validation="required"
                  outer-class="col-span-6"
                  wrapper-class="w-full"
                  :input-class="`input input-block input-bordered w-full`"
                  v-model="data.project_address.state"
                />
                <FormKit
                  message-class="text-red-400"
                  type="text"
                  name="zip"
                  label="Zip"
                  validation="required"
                  outer-class="col-span-6"
                  wrapper-class="w-full"
                  :input-class="`input input-block input-bordered w-full`"
                  v-model="data.project_address.zip"
                />
              </div>
            </div>

            <div class="flex flex-row">
              <!-- formkit textarea -->
              <FormKit
                message-class="text-red-400"
                type="textarea"
                rows="4"
                name="description"
                help="Kindly provide a thorough and detailed description of your proposed scope of work, including specific details such as heights, depths, square footage, and any other relevant measurements."
                label="Scope of Work"
                validation="required"
                outer-class="col-span-6"
                wrapper-class="w-full"
                :input-class="`textarea textarea-block input-bordered w-full`"
                v-model="data.scope_of_work.description"
              />
            </div>
            <div class="flex flex-row">
              <FormKit
                type="file"
                label="Upload your files"
                validation="required"
                validation-message="Please upload your files"
                message-class="text-red-400"
                label-class="text-gray-50 text-xl"
                help="Attach multiple files. You can drag and drop or browse to select files."
                multiple="true"
                file-list-class="flex flex-col"
                file-remove-icon="btn btn-danger"
                outer-class="p-10 border border-gray-600 rounded-xl flex flex-col w-full"
                inner-class="flex flex-col gap-5"
                :value="data.uploaded_files"
              />
            </div>
          </div>

          <Loading v-if="state.loading" />
        </template>
      </FormKit>
    </div>
  </dialog>

  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Owner Builder</h1>
        <p class="py-6">This form is exclusively for use by owner-builders.</p>
        <div
          class="flex flex-col md:flex-row gap-5 items-center justify-center"
        >
          <button
            onclick="owner_builder.showModal()"
            class="btn btn-success text-gray-50"
          >
            Fill It Out
          </button>

          <button class="btn btn-error text-gray-50">
            Whoops, go to Licensed Proffessional
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

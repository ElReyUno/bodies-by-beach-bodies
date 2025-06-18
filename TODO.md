# Todo List: Implementing Forms with Local/Session Storage

## Table of Contents

- [Phase 1: Planning & Setup](#phase-1-planning--setup)
- [Phase 2: Core Implementation (Contact Form First)](#phase-2-core-implementation-contact-form-first)
- [Phase 3: Enhancements & Reusability](#phase-3-enhancements--reusability)
- [Phase 4: Demonstrating the Stored Data](#phase-4-demonstrating-the-stored-data)
- [Phase 5: Rollout and Final Checks](#phase-5-rollout-and-final-checks)

## Phase 1: Planning & Setup

- [x] **Identify Target Forms:** Review the `Route Based Components` section in the README and identify all components that require a form.
    - [ ] **Primary Target:** `Contact Component` (`/contact`)
    - [ ] **Secondary Targets (Sign-ups):**
        - [ ] `Boxing Lessons Sub-Component`
        - [ ] `Boot Camp Sub-Component`
        - [ ] `Personal Training Sub-Component`
        - [ ] Other "sign up" components under `/services` and `/facilities`
    - [ ] **Potential Targets:**
        - [ ] `Partnerships Component` (e.g., an "Express Interest" form)
        - [ ] `Testimonials Component` (e.g., a "Submit Your Story" form)

- [x] **Define Data Structures:** For each form, define the data object that will be stored.

    Example for Contact Form:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "phone": "555-123-4567",
      "message": "I'm interested in personal training!",
      "timestamp": "2023-10-27T10:00:00.000Z"
    }
    ```
    Example for Service Sign-up:
    ```json
    {
      "service": "Boot Camp",
      "name": "John Smith",
      "email": "john.smith@example.com",
      "preferredTime": "Morning",
      "timestamp": "2023-10-27T10:05:00.000Z"
    }
    ```

- [x] **Set Up Development Branch:**
    - [x] Create a new feature branch from the latest `gh-pages`:
      ```bash
      git checkout -b feature/local-storage-forms
      ```

---

## Phase 2: Core Implementation (Contact Form First)

- [ ] **Create the Form Component (`ContactForm.js`):**
    - [ ] Create the JSX structure for the form
    - [ ] Use standard HTML `<form>`, `<input>`, `<textarea>`, and `<button type="submit">` elements
    - [ ] Add basic attributes like `name`, `type`, `placeholder`, and `id`

- [ ] **Manage Form State in React:**
    - [ ] Use the `useState` hook to manage input values
    - [ ] Create an `onChange` handler to update state
    - [ ] Link state to inputs using `value` and `onChange` props

- [ ] **Handle Form Submission:**
    - [ ] Create an `onSubmit` handler for the `<form>` element
    - [ ] Call `event.preventDefault()` to stop browser refresh
    - [ ] Save serialized data to `localStorage`

- [ ] **Add User Feedback:**
    - [ ] Display a confirmation message on successful submission
    - [ ] Consider using a state variable (e.g., `isSubmitted`) to conditionally render a success message instead of an `alert()`

---

## Phase 3: Enhancements & Reusability

- [ ] **Create a Reusable Form Hook (Optional but Recommended):**
    - [ ] Create a custom hook `useFormStorage` in `hooks/useFormStorage.js` to manage state and storage logic
    - [ ] The hook should return `formData`, `handleChange`, `handleSubmit`, and `setFormData`

- [ ] **Implement Form Validation:**
    - [ ] Add the `required` attribute to essential inputs
    - [ ] Add client-side validation logic in the `handleSubmit` function
    - [ ] Display clear, user-friendly error messages for invalid fields

- [ ] **Style the Forms:**
    - [ ] Use Tailwind CSS to style all form elements to match the site's design
    - [ ] Ensure forms, inputs, and error messages are fully responsive

- [ ] **Ensure Accessibility:**
    - [ ] Use `<label>` with `htmlFor` for every input
    - [ ] Use correct input `type` attributes (e.g., `email`, `tel`)
    - [ ] Ensure focus states are visible and keyboard navigation is functional

---

## Phase 4: Demonstrating the Stored Data

- [ ] **Create a "Submissions" Viewer:**
    - [ ] Create a new page (e.g., `/admin/submissions`) or a section on an existing page to display saved data
    - [ ] Create a component that reads from `localStorage` using `useEffect` and renders the data
    - [ ] Map over the stored data to display each submission

---

## Phase 5: Rollout and Final Checks

- [ ] **Implement All Other Forms:**
    - [ ] Apply the pattern or custom hook from previous phases to all other identified forms
    - [ ] Use unique keys for `localStorage` for each distinct form (e.g., `bootcampSignups`, `partnershipInquiries`)

- [ ] **Local Testing:**
    - [ ] Run the dev server (`npm run dev`) and test every form
    - [ ] Use browser dev tools (Application → Local Storage) to inspect data
    - [ ] Test validation, feedback messages, and the submission viewer

- [ ] **Test Static Export Locally:**
    - [ ] Run the static build process:
      ```bash
      npm run build
      ```
    - [ ] Serve the output directory:
      ```bash
      npx serve out
      ```
    - [ ] Re-test all form functionality in the locally served static environment

- [ ] **Deploy:**
    - [ ] Merge the feature branch (`feature/local-storage-forms`) into `feature/gh-pages`
    - [ ] Push `feature/gh-pages` to GitHub
    - [ ] Verify all functionality on the live GitHub Pages URL
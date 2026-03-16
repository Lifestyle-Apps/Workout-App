const splitTemplates = {
  "Push Day": {
    duration: "50-60 minutes",
    rows: [
      { exercise: "Barbell Bench Press", setType: "Warm-up", sets: 2, weight: "50-60%", reps: "8", rpe: "5" },
      { exercise: "Barbell Bench Press", setType: "Working", sets: 4, weight: "70-80%", reps: "5-8", rpe: "7-9" },
      { exercise: "Overhead Press", setType: "Working", sets: 3, weight: "Moderate", reps: "6-10", rpe: "7-8" },
      { exercise: "Incline Dumbbell Press", setType: "Working", sets: 3, weight: "Moderate", reps: "8-12", rpe: "8" }
    ]
  },
  "Pull Day": {
    duration: "50-60 minutes",
    rows: [
      { exercise: "Lat Pulldown", setType: "Warm-up", sets: 2, weight: "Light", reps: "10", rpe: "5" },
      { exercise: "Lat Pulldown", setType: "Working", sets: 4, weight: "Moderate", reps: "8-10", rpe: "7-9" },
      { exercise: "Barbell Row", setType: "Working", sets: 3, weight: "Moderate", reps: "6-10", rpe: "8" },
      { exercise: "Seated Cable Row", setType: "Working", sets: 3, weight: "Moderate", reps: "10-12", rpe: "8" }
    ]
  },
  "Leg Day": {
    duration: "55-65 minutes",
    rows: [
      { exercise: "Back Squat", setType: "Warm-up", sets: 3, weight: "40-60%", reps: "5", rpe: "5" },
      { exercise: "Back Squat", setType: "Working", sets: 4, weight: "70-80%", reps: "5-8", rpe: "8" },
      { exercise: "Romanian Deadlift", setType: "Working", sets: 3, weight: "Moderate", reps: "8-10", rpe: "7-8" },
      { exercise: "Leg Press", setType: "Working", sets: 3, weight: "Moderate", reps: "10-12", rpe: "8-9" }
    ]
  },
  Arms: {
    duration: "45-55 minutes",
    rows: [
      { exercise: "EZ-Bar Curl", setType: "Warm-up", sets: 2, weight: "Light", reps: "12", rpe: "5" },
      { exercise: "EZ-Bar Curl", setType: "Working", sets: 3, weight: "Moderate", reps: "8-12", rpe: "8" },
      { exercise: "Rope Triceps Pushdown", setType: "Working", sets: 3, weight: "Moderate", reps: "10-12", rpe: "8" },
      { exercise: "Hammer Curl", setType: "Working", sets: 3, weight: "Moderate", reps: "10-12", rpe: "8" }
    ]
  },
  "Upper Body": {
    duration: "50-60 minutes",
    rows: [
      { exercise: "Flat Dumbbell Press", setType: "Warm-up", sets: 2, weight: "Light", reps: "10", rpe: "5" },
      { exercise: "Flat Dumbbell Press", setType: "Working", sets: 4, weight: "Moderate", reps: "8-10", rpe: "8" },
      { exercise: "Chest-Supported Row", setType: "Working", sets: 4, weight: "Moderate", reps: "8-10", rpe: "8" },
      { exercise: "Seated Dumbbell Shoulder Press", setType: "Working", sets: 3, weight: "Moderate", reps: "8-12", rpe: "8" }
    ]
  },
  "Full Body": {
    duration: "55-65 minutes",
    rows: [
      { exercise: "Goblet Squat", setType: "Warm-up", sets: 2, weight: "Light", reps: "10", rpe: "5" },
      { exercise: "Deadlift", setType: "Working", sets: 3, weight: "Moderate-Heavy", reps: "4-6", rpe: "8" },
      { exercise: "Bench Press", setType: "Working", sets: 3, weight: "Moderate", reps: "6-8", rpe: "8" },
      { exercise: "Split Squat", setType: "Working", sets: 2, weight: "Light-Moderate", reps: "10/leg", rpe: "8" }
    ]
  },
  Conditioning: {
    duration: "45-50 minutes",
    rows: [
      { exercise: "Rower", setType: "Warm-up", sets: 1, weight: "Easy pace", reps: "8 min", rpe: "4" },
      { exercise: "Kettlebell Swing", setType: "Working", sets: 4, weight: "Moderate", reps: "15", rpe: "8" },
      { exercise: "Burpee", setType: "Working", sets: 4, weight: "Bodyweight", reps: "10", rpe: "8-9" },
      { exercise: "Air Bike Sprint", setType: "Working", sets: 6, weight: "All-out", reps: "20 sec", rpe: "9" }
    ]
  },
  Other: {
    duration: "45-60 minutes",
    rows: [
      { exercise: "Custom Exercise", setType: "Warm-up", sets: 2, weight: "", reps: "", rpe: "" },
      { exercise: "Custom Exercise", setType: "Working", sets: 3, weight: "", reps: "", rpe: "" }
    ]
  }
};

const allExercises = [
  "Barbell Bench Press", "Overhead Press", "Incline Dumbbell Press", "Cable Lateral Raise",
  "Lat Pulldown", "Barbell Row", "Seated Cable Row", "Face Pull", "Back Squat",
  "Romanian Deadlift", "Leg Press", "Walking Lunge", "EZ-Bar Curl", "Rope Triceps Pushdown",
  "Hammer Curl", "Overhead Triceps Extension", "Flat Dumbbell Press", "Chest-Supported Row",
  "Deadlift", "One-Arm Dumbbell Row", "Split Squat", "Rower", "Kettlebell Swing", "Burpee",
  "Air Bike Sprint", "Farmer Carry"
];

const customHeaderInput = document.getElementById("customHeader");
const splitDaySelect = document.getElementById("splitDay");
const applyTemplateBtn = document.getElementById("applyTemplate");
const workoutHeader = document.getElementById("workoutHeader");
const durationHint = document.getElementById("durationHint");
const exerciseSections = document.getElementById("exerciseSections");
const addExerciseBtn = document.getElementById("addExercise");
const exportDataBtn = document.getElementById("exportData");

let workoutRows = [];

function getMDD() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = String(today.getDate()).padStart(2, "0");
  return `${month}/${day}`;
}

function updateHeader() {
  const selectedSplit = splitDaySelect.value;
  const customName = customHeaderInput.value.trim();
  workoutHeader.textContent = `${customName || selectedSplit} - ${getMDD()}`;
  durationHint.textContent = `Estimated duration: ${(splitTemplates[selectedSplit] || splitTemplates.Other).duration}`;
}

function buildExerciseOptions(selectedSplit, selectedExercise = "") {
  const dayTemplate = splitTemplates[selectedSplit] || splitTemplates.Other;
  const dayExercises = [...new Set(dayTemplate.rows.map((row) => row.exercise))];
  const merged = [...new Set([...dayExercises, ...allExercises])];

  let options = `<option value="">Select exercise</option>`;
  options += `<optgroup label="Suggested for ${selectedSplit}">`;
  options += dayExercises.map((ex) => `<option value="${ex}" ${ex === selectedExercise ? "selected" : ""}>${ex}</option>`).join("");
  options += `</optgroup><optgroup label="All exercises">`;
  options += merged.map((ex) => `<option value="${ex}" ${ex === selectedExercise ? "selected" : ""}>${ex}</option>`).join("");
  options += `</optgroup><option value="Other" ${selectedExercise === "Other" ? "selected" : ""}>Other</option>`;
  return options;
}

function groupByExercise(rows) {
  const groups = new Map();
  rows.forEach((row) => {
    const key = row.exercise || "Other";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  });
  return [...groups.entries()];
}

function makeSetLine(row, groupName) {
  const line = document.createElement("div");
  line.className = `set-line ${row.setType === "Warm-up" ? "warmup-row" : "working-row"}`;
  line.innerHTML = `
    <div class="field-group"><label>Set Type</label><select class="set-type"><option ${row.setType === "Warm-up" ? "selected" : ""}>Warm-up</option><option ${row.setType === "Working" ? "selected" : ""}>Working</option></select></div>
    <div class="field-group"><label>Sets</label><input type="number" min="1" class="sets" value="${row.sets ?? 1}" /></div>
    <div class="field-group"><label>Weight</label><input type="text" class="weight" value="${row.weight ?? ""}" /></div>
    <div class="field-group"><label>Reps</label><input type="text" class="reps" value="${row.reps ?? ""}" /></div>
    <div class="field-group"><label>RPE / Effort</label><input type="text" class="rpe" value="${row.rpe ?? ""}" /></div>
    <div class="field-group"><label>Notes</label><input type="text" class="notes" value="${row.notes ?? ""}" /></div>
    <div class="field-group"><label>Action</label><button type="button" class="remove-set">Remove set</button></div>
  `;

  line.querySelector(".set-type").addEventListener("change", (e) => {
    row.setType = e.target.value;
    line.className = `set-line ${row.setType === "Warm-up" ? "warmup-row" : "working-row"}`;
  });
  ["sets", "weight", "reps", "rpe", "notes"].forEach((key) => {
    line.querySelector(`.${key}`).addEventListener("input", (e) => {
      row[key] = e.target.value;
    });
  });
  line.querySelector(".remove-set").addEventListener("click", () => {
    workoutRows = workoutRows.filter((r) => r.id !== row.id);
    if (!workoutRows.some((r) => (r.exercise || "Other") === groupName)) {
      workoutRows.push({ id: crypto.randomUUID(), exercise: groupName, setType: "Working", sets: 1, weight: "", reps: "", rpe: "" });
    }
    renderSections();
  });

  return line;
}

function renderSections() {
  exerciseSections.innerHTML = "";
  const groups = groupByExercise(workoutRows);

  groups.forEach(([exerciseName, sets]) => {
    const card = document.createElement("article");
    card.className = "exercise-card";

    const header = document.createElement("div");
    header.className = "exercise-head";
    header.innerHTML = `
      <div>
        <label>Exercise</label>
        <select class="exercise-select">${buildExerciseOptions(splitDaySelect.value, allExercises.includes(exerciseName) ? exerciseName : "Other")}</select>
        <input class="other-exercise" type="text" placeholder="Type custom exercise" value="${allExercises.includes(exerciseName) ? "" : exerciseName}" style="display:${allExercises.includes(exerciseName) ? "none" : "block"}; margin-top:6px;" />
      </div>
      <div class="exercise-actions">
        <button type="button" class="add-set">+ Add Set Line</button>
        <button type="button" class="remove-exercise">Remove Exercise</button>
      </div>
    `;

    const exerciseSelect = header.querySelector(".exercise-select");
    const otherExerciseInput = header.querySelector(".other-exercise");

    exerciseSelect.addEventListener("change", () => {
      const newName = exerciseSelect.value;
      otherExerciseInput.style.display = newName === "Other" ? "block" : "none";
      const finalName = newName === "Other" ? (otherExerciseInput.value.trim() || "Other") : newName;
      sets.forEach((setRow) => {
        setRow.exercise = finalName;
      });
      renderSections();
    });

    otherExerciseInput.addEventListener("input", () => {
      const val = otherExerciseInput.value.trim() || "Other";
      sets.forEach((setRow) => {
        setRow.exercise = val;
      });
    });

    header.querySelector(".add-set").addEventListener("click", () => {
      workoutRows.push({
        id: crypto.randomUUID(),
        exercise: exerciseName,
        setType: "Working",
        sets: 1,
        weight: "",
        reps: "",
        rpe: ""
      });
      renderSections();
    });

    header.querySelector(".remove-exercise").addEventListener("click", () => {
      workoutRows = workoutRows.filter((row) => (row.exercise || "Other") !== exerciseName);
      renderSections();
    });

    card.appendChild(header);
    sets.forEach((setRow) => {
      card.appendChild(makeSetLine(setRow, exerciseName));
    });
    exerciseSections.appendChild(card);
  });
}

function applyTemplate() {
  const selectedSplit = splitDaySelect.value;
  const template = splitTemplates[selectedSplit] || splitTemplates.Other;
  workoutRows = template.rows.map((row) => ({ ...row, id: crypto.randomUUID() }));
  updateHeader();
  renderSections();
}

function exportData() {
  const payload = {
    header: workoutHeader.textContent,
    splitDay: splitDaySelect.value,
    date: getMDD(),
    duration: durationHint.textContent.replace("Estimated duration: ", ""),
    exercises: workoutRows.map(({ id, ...rest }) => rest)
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${(splitDaySelect.value || "workout").replace(/\s+/g, "_").toLowerCase()}_${getMDD().replace("/", "-")}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

customHeaderInput.addEventListener("input", updateHeader);
splitDaySelect.addEventListener("change", applyTemplate);
applyTemplateBtn.addEventListener("click", applyTemplate);
addExerciseBtn.addEventListener("click", () => {
  workoutRows.push({ id: crypto.randomUUID(), exercise: "Other", setType: "Working", sets: 1, weight: "", reps: "", rpe: "" });
  renderSections();
});
exportDataBtn.addEventListener("click", exportData);

updateHeader();
applyTemplate();

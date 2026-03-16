const exerciseCatalog = {
  Chest: [
    "Bench Press - Barbell", "Bench Press - Dumbbell", "Incline Bench Press - Barbell", "Incline Bench Press - Dumbbell",
    "Decline Bench Press", "Machine Chest Press", "Cable Fly", "Pec Deck", "Push-Up", "Weighted Dip"
  ],
  Back: [
    "Pull-Up", "Chin-Up", "Lat Pulldown - Wide", "Lat Pulldown - Neutral", "Barbell Row", "Dumbbell Row",
    "Chest-Supported Row", "Seated Cable Row", "T-Bar Row", "Face Pull"
  ],
  Shoulders: [
    "Overhead Press - Barbell", "Overhead Press - Dumbbell", "Arnold Press", "Lateral Raise - Dumbbell",
    "Lateral Raise - Cable", "Rear Delt Fly", "Upright Row", "Machine Shoulder Press"
  ],
  Legs: [
    "Back Squat", "Front Squat", "Goblet Squat", "Leg Press", "Hack Squat", "Romanian Deadlift", "Conventional Deadlift",
    "Bulgarian Split Squat", "Walking Lunge", "Leg Extension", "Leg Curl", "Calf Raise"
  ],
  Arms: [
    "EZ-Bar Curl", "Barbell Curl", "Incline Dumbbell Curl", "Hammer Curl", "Cable Curl", "Triceps Pushdown - Rope",
    "Triceps Pushdown - Bar", "Skull Crusher", "Overhead Triceps Extension", "Close-Grip Bench Press"
  ],
  Core: ["Plank", "Ab Wheel Rollout", "Cable Crunch", "Hanging Leg Raise", "Russian Twist", "Pallof Press"],
  Conditioning: ["Rower Intervals", "Air Bike Sprint", "Sled Push", "Battle Ropes", "Kettlebell Swing", "Burpee"]
};

const splitTemplates = {
  "Push Day": {
    duration: "50-60 minutes",
    rows: [
      { exercise: "Bench Press - Barbell", setType: "Warm-up", sets: 2, reps: "8", rpe: "5", unit: "lbs" },
      { exercise: "Bench Press - Barbell", setType: "Working", sets: 4, reps: "5-8", rpe: "8", unit: "lbs" },
      { exercise: "Overhead Press - Dumbbell", setType: "Working", sets: 3, reps: "8-10", rpe: "8", unit: "lbs" },
      { exercise: "Cable Fly", setType: "Working", sets: 3, reps: "10-15", rpe: "8", unit: "lbs" }
    ]
  },
  "Pull Day": {
    duration: "50-60 minutes",
    rows: [
      { exercise: "Lat Pulldown - Wide", setType: "Warm-up", sets: 2, reps: "10", rpe: "5", unit: "lbs" },
      { exercise: "Lat Pulldown - Wide", setType: "Working", sets: 4, reps: "8-10", rpe: "8", unit: "lbs" },
      { exercise: "Barbell Row", setType: "Working", sets: 3, reps: "6-10", rpe: "8", unit: "lbs" },
      { exercise: "Face Pull", setType: "Working", sets: 3, reps: "12-15", rpe: "8", unit: "lbs" }
    ]
  },
  "Leg Day": {
    duration: "55-65 minutes",
    rows: [
      { exercise: "Back Squat", setType: "Warm-up", sets: 3, reps: "5", rpe: "5", unit: "lbs" },
      { exercise: "Back Squat", setType: "Working", sets: 4, reps: "5-8", rpe: "8", unit: "lbs" },
      { exercise: "Romanian Deadlift", setType: "Working", sets: 3, reps: "8-10", rpe: "8", unit: "lbs" },
      { exercise: "Leg Press", setType: "Working", sets: 3, reps: "10-12", rpe: "9", unit: "lbs" }
    ]
  },
  Arms: {
    duration: "45-55 minutes",
    rows: [
      { exercise: "EZ-Bar Curl", setType: "Warm-up", sets: 2, reps: "12", rpe: "5", unit: "lbs" },
      { exercise: "EZ-Bar Curl", setType: "Working", sets: 3, reps: "8-12", rpe: "8", unit: "lbs" },
      { exercise: "Triceps Pushdown - Rope", setType: "Working", sets: 3, reps: "10-12", rpe: "8", unit: "lbs" },
      { exercise: "Hammer Curl", setType: "Working", sets: 3, reps: "10-12", rpe: "8", unit: "lbs" }
    ]
  },
  "Upper Body": {
    duration: "50-60 minutes",
    rows: [
      { exercise: "Bench Press - Dumbbell", setType: "Warm-up", sets: 2, reps: "10", rpe: "5", unit: "lbs" },
      { exercise: "Bench Press - Dumbbell", setType: "Working", sets: 4, reps: "8-10", rpe: "8", unit: "lbs" },
      { exercise: "Chest-Supported Row", setType: "Working", sets: 4, reps: "8-10", rpe: "8", unit: "lbs" },
      { exercise: "Overhead Press - Dumbbell", setType: "Working", sets: 3, reps: "8-12", rpe: "8", unit: "lbs" }
    ]
  },
  "Full Body": {
    duration: "55-65 minutes",
    rows: [
      { exercise: "Goblet Squat", setType: "Warm-up", sets: 2, reps: "10", rpe: "5", unit: "lbs" },
      { exercise: "Conventional Deadlift", setType: "Working", sets: 3, reps: "4-6", rpe: "8", unit: "lbs" },
      { exercise: "Bench Press - Barbell", setType: "Working", sets: 3, reps: "6-8", rpe: "8", unit: "lbs" },
      { exercise: "Seated Cable Row", setType: "Working", sets: 3, reps: "8-12", rpe: "8", unit: "lbs" }
    ]
  },
  Conditioning: {
    duration: "45-50 minutes",
    rows: [
      { exercise: "Rower Intervals", setType: "Warm-up", sets: 1, reps: "8 min", rpe: "4", unit: "lbs" },
      { exercise: "Kettlebell Swing", setType: "Working", sets: 4, reps: "15", rpe: "8", unit: "lbs" },
      { exercise: "Burpee", setType: "Working", sets: 4, reps: "10", rpe: "9", unit: "lbs" },
      { exercise: "Air Bike Sprint", setType: "Working", sets: 6, reps: "20 sec", rpe: "9", unit: "lbs" }
    ]
  },
  Other: {
    duration: "45-60 minutes",
    rows: [
      { exercise: "Custom Exercise", setType: "Warm-up", sets: 2, reps: "", rpe: "", unit: "lbs" },
      { exercise: "Custom Exercise", setType: "Working", sets: 3, reps: "", rpe: "", unit: "lbs" }
    ]
  }
};

const allExercises = Object.values(exerciseCatalog).flat();

const customHeaderInput = document.getElementById("customHeader");
const splitDaySelect = document.getElementById("splitDay");
const applyTemplateBtn = document.getElementById("applyTemplate");
const workoutHeader = document.getElementById("workoutHeader");
const durationHint = document.getElementById("durationHint");
const exerciseSections = document.getElementById("exerciseSections");
const addExerciseBtn = document.getElementById("addExercise");
const addExerciseBottomBtn = document.getElementById("addExerciseBottom");
const exportDataBtn = document.getElementById("exportData");
const themeSelect = document.getElementById("themeSelect");

let workoutRows = [];
let exerciseNotes = {};
let lastAppliedSnapshot = "";
let lastAppliedSplitDay = splitDaySelect.value;

function getMDD() {
  const today = new Date();
  return `${today.getMonth() + 1}/${String(today.getDate()).padStart(2, "0")}`;
}

function updateHeader() {
  const selectedSplit = splitDaySelect.value;
  const customName = customHeaderInput.value.trim();
  workoutHeader.textContent = `${customName || selectedSplit} - ${getMDD()}`;
  durationHint.textContent = `Estimated duration: ${(splitTemplates[selectedSplit] || splitTemplates.Other).duration}`;
}

function buildExerciseOptions(selectedExercise = "") {
  let options = `<option value="">Select exercise</option>`;
  Object.entries(exerciseCatalog).forEach(([muscleGroup, exercises]) => {
    options += `<optgroup label="Muscle Group: ${muscleGroup}">`;
    options += exercises.map((exercise) => `<option value="${exercise}" ${exercise === selectedExercise ? "selected" : ""}>${exercise}</option>`).join("");
    options += `</optgroup>`;
  });
  options += `<option value="Other" ${selectedExercise === "Other" ? "selected" : ""}>Other</option>`;
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

function getSetLabel(setType, counter) {
  return setType === "Warm-up" ? `Warm Up ${counter}` : `Set ${counter}`;
}

function makeSetLine(row, exerciseName, setLabel) {
  const line = document.createElement("div");
  line.className = `set-line ${row.setType === "Warm-up" ? "warmup-row" : "working-row"}`;
  line.innerHTML = `
    <div class="set-line-header">
      <div class="set-line-name">${setLabel}</div>
      <button type="button" class="remove-set">Remove</button>
    </div>
    <div class="set-fields">
      <div class="field-group">
        <label>Set Type</label>
        <select class="set-type">
          <option ${row.setType === "Warm-up" ? "selected" : ""}>Warm-up</option>
          <option ${row.setType === "Working" ? "selected" : ""}>Working</option>
        </select>
      </div>
      <div class="field-group">
        <label>Weight</label>
        <div class="weight-wrap">
          <input type="text" inputmode="decimal" pattern="[0-9]*[.]?[0-9]*" class="weight" value="${row.weight ?? ""}" />
          <span class="unit-inline">${row.unit || "lbs"}</span>
        </div>
      </div>
      <div class="field-group"><label>Reps</label><input type="text" class="reps" value="${row.reps ?? ""}" /></div>
      <div class="field-group"><label>RPE</label><input type="text" class="rpe" value="${row.rpe ?? ""}" /></div>
    </div>
  `;

  line.querySelector(".set-type").addEventListener("change", (e) => {
    row.setType = e.target.value;
    renderSections();
  });

  ["weight", "reps", "rpe"].forEach((key) => {
    line.querySelector(`.${key}`).addEventListener("input", (e) => {
      row[key] = e.target.value;
    });
  });

  line.querySelector(".remove-set").addEventListener("click", () => {
    workoutRows = workoutRows.filter((r) => r.id !== row.id);
    if (!workoutRows.some((r) => (r.exercise || "Other") === exerciseName)) {
      workoutRows.push({ id: crypto.randomUUID(), exercise: exerciseName, setType: "Working", weight: "", reps: "", rpe: "", unit: row.unit || "lbs" });
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

    const currentUnit = sets[0]?.unit || "lbs";
    const header = document.createElement("div");
    header.className = "exercise-head";
    header.innerHTML = `
      <div>
        <label>Exercise</label>
        <select class="exercise-select">${buildExerciseOptions(allExercises.includes(exerciseName) ? exerciseName : "Other")}</select>
        <input class="other-exercise" type="text" placeholder="Type custom exercise" value="${allExercises.includes(exerciseName) ? "" : exerciseName}" style="display:${allExercises.includes(exerciseName) ? "none" : "block"}; margin-top:6px;" />
      </div>
      <div class="unit-toggle">
        <label>Weight Unit</label>
        <select class="unit-select">
          <option value="lbs" ${currentUnit === "lbs" ? "selected" : ""}>Pounds (lbs)</option>
          <option value="kg" ${currentUnit === "kg" ? "selected" : ""}>Kilograms (kg)</option>
        </select>
      </div>
      <div class="exercise-actions">
        <button type="button" class="add-set">+ Add Set</button>
        <button type="button" class="remove-exercise">Remove Exercise</button>
      </div>
    `;

    const exerciseSelect = header.querySelector(".exercise-select");
    const otherExerciseInput = header.querySelector(".other-exercise");
    const unitSelect = header.querySelector(".unit-select");

    exerciseSelect.addEventListener("change", () => {
      const selected = exerciseSelect.value;
      otherExerciseInput.style.display = selected === "Other" ? "block" : "none";
      const newExerciseName = selected === "Other" ? (otherExerciseInput.value.trim() || "Other") : selected;
      if (newExerciseName !== exerciseName) {
        exerciseNotes[newExerciseName] = exerciseNotes[exerciseName] || "";
        delete exerciseNotes[exerciseName];
      }
      sets.forEach((setRow) => { setRow.exercise = newExerciseName; });
      renderSections();
    });

    otherExerciseInput.addEventListener("input", () => {
      const typed = otherExerciseInput.value.trim() || "Other";
      sets.forEach((setRow) => { setRow.exercise = typed; });
      exerciseNotes[typed] = exerciseNotes[exerciseName] || "";
    });

    unitSelect.addEventListener("change", () => {
      sets.forEach((setRow) => { setRow.unit = unitSelect.value; });
      renderSections();
    });

    header.querySelector(".add-set").addEventListener("click", () => {
      workoutRows.push({
        id: crypto.randomUUID(),
        exercise: exerciseName,
        setType: "Working",
        weight: "",
        reps: "",
        rpe: "",
        unit: unitSelect.value
      });
      renderSections();
    });

    header.querySelector(".remove-exercise").addEventListener("click", () => {
      workoutRows = workoutRows.filter((row) => (row.exercise || "Other") !== exerciseName);
      delete exerciseNotes[exerciseName];
      renderSections();
    });

    card.appendChild(header);

    let warmUpCount = 0;
    let workingCount = 0;
    sets.forEach((setRow) => {
      if (setRow.setType === "Warm-up") {
        warmUpCount += 1;
        card.appendChild(makeSetLine(setRow, exerciseName, getSetLabel("Warm-up", warmUpCount)));
      } else {
        workingCount += 1;
        card.appendChild(makeSetLine(setRow, exerciseName, getSetLabel("Working", workingCount)));
      }
    });

    const notesWrap = document.createElement("div");
    notesWrap.className = "exercise-notes";
    notesWrap.innerHTML = `
      <label>Notes</label>
      <textarea class="exercise-note" placeholder="Add notes for ${exerciseName}...">${exerciseNotes[exerciseName] || ""}</textarea>
    `;
    notesWrap.querySelector(".exercise-note").addEventListener("input", (e) => {
      exerciseNotes[exerciseName] = e.target.value;
    });
    card.appendChild(notesWrap);

    exerciseSections.appendChild(card);
  });
}

function expandTemplateRows(rows) {
  return rows.flatMap((row) => {
    const count = Number(row.sets) || 1;
    return Array.from({ length: count }, () => ({
      id: crypto.randomUUID(),
      exercise: row.exercise,
      setType: row.setType,
      weight: "",
      reps: row.reps || "",
      rpe: row.rpe || "",
      unit: row.unit || "lbs"
    }));
  });
}

function createComparableState() {
  const rows = workoutRows.map(({ id, ...rest }) => ({ ...rest }));
  const sortedNotes = Object.keys(exerciseNotes)
    .sort()
    .reduce((acc, key) => {
      acc[key] = exerciseNotes[key];
      return acc;
    }, {});
  return JSON.stringify({ rows, notes: sortedNotes });
}

function hasUnsavedWorkoutInputs() {
  return createComparableState() !== lastAppliedSnapshot;
}

function confirmTemplateOverwrite() {
  if (!hasUnsavedWorkoutInputs()) return true;
  return window.confirm("Changing or applying a workout template will erase data already entered in the form. Continue?");
}

function applyTemplate(selectedSplit = splitDaySelect.value) {
  const template = splitTemplates[selectedSplit] || splitTemplates.Other;
  workoutRows = expandTemplateRows(template.rows);
  exerciseNotes = {};
  splitDaySelect.value = selectedSplit;
  updateHeader();
  renderSections();
  lastAppliedSplitDay = selectedSplit;
  lastAppliedSnapshot = createComparableState();
}

function addExerciseToEnd() {
  workoutRows.push({ id: crypto.randomUUID(), exercise: "Other", setType: "Working", weight: "", reps: "", rpe: "", unit: "lbs" });
  renderSections();
}

function exportData() {
  const payload = {
    header: workoutHeader.textContent,
    splitDay: splitDaySelect.value,
    date: getMDD(),
    duration: durationHint.textContent.replace("Estimated duration: ", ""),
    sets: workoutRows.map(({ id, ...rest }) => rest),
    exerciseNotes
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

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  themeSelect.value = nextTheme;
  document.body.classList.toggle("dark", nextTheme === "dark");
  try {
    localStorage.setItem("workoutTheme", nextTheme);
  } catch (error) {
    // ignore storage availability issues
  }
}

themeSelect.addEventListener("change", () => applyTheme(themeSelect.value));
themeSelect.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeSelect.value === "dark");
});

customHeaderInput.addEventListener("input", updateHeader);
splitDaySelect.addEventListener("change", () => {
  const targetSplit = splitDaySelect.value;
  if (!confirmTemplateOverwrite()) {
    splitDaySelect.value = lastAppliedSplitDay;
    return;
  }
  applyTemplate(targetSplit);
});

applyTemplateBtn.addEventListener("click", () => {
  if (!confirmTemplateOverwrite()) return;
  applyTemplate(splitDaySelect.value);
});
addExerciseBottomBtn.addEventListener("click", addExerciseToEnd);
exportDataBtn.addEventListener("click", exportData);

const savedTheme = (() => {
  try {
    return localStorage.getItem("workoutTheme");
  } catch (error) {
    return null;
  }
})();
applyTheme(savedTheme || "light");

addExerciseBtn.addEventListener("click", addExerciseToEnd);
addExerciseBottomBtn.addEventListener("click", addExerciseToEnd);
exportDataBtn.addEventListener("click", exportData);

updateHeader();
applyTemplate();

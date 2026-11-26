---
name: ege-written-exam-ui
description: Apply the project’s EGE Teachers Hub interface to written English EGE tasks 1–38 when creating or repairing diagnostics, homework, trainers, or practice exams.
---

# EGE Written Exam UI

Read [the template map](../../../ege-written-exam-ui/SOURCES.md) before selecting
a renderer. Use the existing task number in `EgeWritten.render(type, model)`
and load the project stylesheet. Add a host adapter only where the existing
data or controls use a different representation.

Keep the exact source text, supplied audio, choice order, keys, and response
format. For 37, keep the complete email prompt. For 38.1, keep the table.
For 38.2, keep the diagram. Supply all five plan points in both essays.
Place the editor alongside the complete prompt, with the word count and other
existing controls beneath the editor.

Run the ordinary route into the task in a browser. Compare screenshots of the
target and its mapped Hub reference at the same size. Verify answer
persistence, navigation, audio and timers where present, and results handling.
Use a test endpoint for an end-to-end submission.

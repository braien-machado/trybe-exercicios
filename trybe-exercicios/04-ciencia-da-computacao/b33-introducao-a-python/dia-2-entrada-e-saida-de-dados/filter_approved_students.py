with open("students_grades.txt", "r") as file:
    all_students = [line.split(" ") for line in file]
    with open("approved_students.txt", "w") as new_file:
        for student in all_students:
            if int(student[1].replace("\n", "")) >= 6:
                new_file.write(f"{student[0]}\n")

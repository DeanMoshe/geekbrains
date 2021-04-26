class Student:
    def __init__(self, name, surname, birth_date, school, class_room):
        self.name = name
        self.surname = surname
        self.birth_date = birth_date
        self.school = school
        # Сивол нижнего подчеркивания, говорит пользователям класса, что атрибут для внутренеего использования
        self._class_room = {'class_num': int(class_room.split()[0]),
                            'class_char': class_room.split()[1]}

    # @property - позволяет обращаться к методу, как к атрибуту
    # .class_room() --> .class_room

    @property
    def class_room(self):
        return "{} {}".format(self._class_room['class_num'], self._class_room['class_char'])

    def next_class(self):
        self._class_room['class_num'] += 1

    def get_full_name(self):
        return self.name + ' ' + self.surname

    def set_name(self, new_name):
        self.name = new_name

students = [Student("Александр", "Иванов", '10.11.1998', "8 гимназия", "5 А"),
            Student("Петр", "Сидоров", '10.01.1995', "8 гимназия", "8 Б"),
            Student("Иван", "Петров", '12.11.1999', "8 гимназия", "4 В"),
            ]

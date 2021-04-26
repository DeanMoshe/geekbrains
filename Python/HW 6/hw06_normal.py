# Задание-1:
# Реализуйте описаную ниже задачу, используя парадигмы ООП:
# В школе есть Классы(5А, 7Б и т.д.), в которых учатся Ученики. У каждого ученика есть два Родителя(мама и папа).
# Также в школе преподают Учителя, один учитель может преподавать в неограниченном кол-ве классов
# свой определенный предмет. Т.е. Учитель Иванов может преподавать математику у 5А и 6Б, но больше математику не
# может преподавать никто другой.

# Выбранная и заполненная данными структура должна решать следующие задачи:
# 1. Получить полный список всех классов школы
# 2. Получить список всех учеников в указанном классе(каждый ученик отображается в формате "Фамилия И.О.")
# 3. Получить список всех предметов указанного ученика (Ученик --> Класс --> Учителя --> Предметы)
# 4. Узнать ФИО родителей указанного ученика
# 5. Получить список всех Учителей, преподающих в указанном классе

class People:
    def  __init__(self, name, surname):
        self.name = name
        self.surname = surname

    def get_full_name(self):
        return self.name + ' ' + self.surname

# class School:
#     def __init__(self, subjects, class_rooms):
#
    class Pupil:
        def __init__(self, name, surname, parents, subjects, class_room):
            People.__init__(self, name, surname)
            self._parents = {'mother': parents.split()[0],
                             'father': parents.split()[1]}
            self.subjects = list(map(self.subject, subjects))
            self._class_room = {'class_num': int(class_room.split()[0]),
                                'class_char': class_room.split()[1]}

        @property
        def parents(self):
            return "{} {}".format(self._parents['mother'], self._parents['father'])
        def class_room(self):
            return "{} {}".format(self._class_room['class_num'], self._class_room['class_char'])

    class Teacher:
        def __init__(self, name, surname, subject, teach_classes):
            People.__init__(self, name, surname)
            self.subject = subject
            self.teach_classes = list(map(self.convert_class, teach_classes))

        def convert_class(self, class_room):
            return {'class_num': int(class_room.split()[0]),
                    'class_char': class_room.split()[1]}
Pupil1 = ('Вася', 'Иванов','А.В.Иванова К.П.Иванов','','5 А')
Pupil2 = ('Петя', 'Сидоров', 'А.В.Сидорова К.П.Сидоров', '', '5 А')
Pupil3 = ('Аня', 'Петрова', 'А.В.Петрова К.П.Петров', '', '5 А')
Pupil4 = ('Никита', 'Боткин', 'А.В.Боткина К.П.Боткин', '', '6 Б')
Pupil5 = ('Надя', 'Быкова', 'А.В.Быкова К.П.Быков', '', '6 Б')
Teacher1 = ('Александр','Краморов','математика','5 А, 6 Б')
Teacher2 = ('Остап', 'Бендер', 'русский-язык', '5 А')
Teacher3 = ('Алла', 'Васильева', 'русский-язык', '6 Б')

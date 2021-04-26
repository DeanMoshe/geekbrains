# Task #1: Write a class for a triangle shape given by the coordinates of three points.
# Define methods to calculate: Area, height and perimeter of the figure
import math
class Triangle:
    def __init__(self, a, b, c):
        self._a = {'coord_x': int(a.split()[0]),
                   'coord_y': int(a.split()[1])}
        self._b = {'coord_x': int(b.split()[0]),
                   'coord_y': int(b.split()[1])}
        self._c = {'coord_x': int(c.split()[0]),
                   'coord_y': int(c.split()[1])}

    @property
    def a(self):
        return '{} {}'.format(self.a['coord_x'], self.a['coord_y'])
    def b(self):
        return '{} {}'.format(self.b['coord_x'], self.b['coord_y'])
    def c(self):
        return '{} {}'.format(self.c['coord_x'], self.c['coord_y'])

    def perimetr(self):
        print(math.sqrt((b.coord_x - a.coord_x)**2 + (b.coord_y - a.coord_y)**2))

    def __str__(self):
        return'(x:{},y:{})'.format(self.x, self.y)
triangle1 = Triangle('1 1','2 3','3 4')
triangle1.perimetr()
str_v1=str(v1)

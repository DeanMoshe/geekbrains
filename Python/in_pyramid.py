flag_quit = False
while flag_quit != True:
    floor_count_room = []
    first_room_in_floor = []
    number_room = input('Please, enter the room number')
    number_floor = 1
    count_first_room = 1
    count_room = 0
    count_floor = 0
    count_position = 0
    flag_room = False
    i = 0
    while flag_room != True:
        i += 1
        print('floor square - ', i)
        for j in range(0, i):
            floor_count_room.append(i)
            first_room_in_floor.append(count_first_room)
            count_floor += 1
            print('I go to the floor', count_floor)
            count_position = 0
            for z in range(count_first_room, count_first_room + i):
                count_position += 1
                count_room += 1
                print(count_room)
                if int(number_room) == count_room:
                    print('Floor number:', count_floor)
                    print('Number from the left:', count_position, )
                    flag_room = True
            count_first_room += i

    quit = input('Exit? yes/no: ')
    if quit == 'yes':
        flag_quit=True

print('-'*20)
print('')

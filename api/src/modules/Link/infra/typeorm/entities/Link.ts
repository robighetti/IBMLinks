import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

/*
  Model file that instantiates the fields in the 'links' table
*/

@Entity('links')
class Link {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Link;

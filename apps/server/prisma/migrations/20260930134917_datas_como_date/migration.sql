-- AlterTable
ALTER TABLE `goal_contributions` MODIFY `date` DATE NOT NULL;

-- AlterTable
ALTER TABLE `goals` MODIFY `deadline` DATE NOT NULL;

-- AlterTable
ALTER TABLE `transactions` MODIFY `date` DATE NOT NULL;

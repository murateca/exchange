import { ShareDto } from "../share/share.dto";

export class PortfolioGroupDto {
  userId: number;
  shares: ShareDto[];
}
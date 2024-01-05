import { FC, useState } from "react";
import s from "./styles.module.scss";
import { XMarkIcon, Bars3Icon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

import Menu from "@/ui/components/menu";
import cn from "classnames";
import { MenuItem } from "../menu/components";
import { t } from "i18next";

interface Props {
  menuItems: MenuItem[];
  id: number;
  selected: boolean;
  name: string;
  onClick: () => void;
  exclamation?: {
    description: string;
    aggressive?: boolean
  };

  address?: string;
}

const Card: FC<Props> = ({
  menuItems,
  selected,
  onClick,
  name,
  address,
  id,
  exclamation
}) => {
  const isRoot = exclamation?.aggressive && id === 0;
  const [active, setActive] = useState(false);

  const onMenuClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setActive(true);
  };

  return (
    <div
      id={String(id)}
      className={cn(s.card, { [s.selected]: selected, [s.aggressive]: isRoot })}
      onClick={onClick}
    >
      <div className={s.wrapper} title={(address ? isRoot : true) && exclamation?.description}>
        <div className={cn(s.name)}>{isRoot ? t('components.card.root_account') : name}</div>
        <div className={s.right}>
          {(!address ? exclamation : isRoot) && <ExclamationCircleIcon className={cn('w-7 h-7', {'text-white': isRoot, 'text-red-400' : !isRoot})} />}
          {address && !isRoot ? <div className={s.address}>{address}</div> : ""}
          <button className={s.action} onClick={onMenuClick}>
            <Bars3Icon
              className={cn("w-8 h-8", {
                "text-orange-300": selected && !isRoot && address,
                "text-red-600": isRoot && !address,
                "text-text": !selected,
              })}
            />
          </button>
        </div>
      </div>
      <Menu
        active={active}
        items={[
          ...menuItems,
          {
            action: () => {
              setActive(false);
            },
            icon: (
              <XMarkIcon
                title={t("components.card.close")}
                className="w-8 h-8 cursor-pointer text-bg"
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default Card;

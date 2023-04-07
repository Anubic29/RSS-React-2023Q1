import React, { useMemo } from 'react';
import { CharacterType } from 'types/CharacterType';

import styles from './CharacterModal.module.scss';

interface CharacterModalProps {
  data: CharacterType;
}

function CharacterModal(props: CharacterModalProps) {
  const { data } = props;

  const displayData = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, image, name, url, episode, created, ...rest } = data;
    console.log(rest);
    return rest;
  }, [data]);

  return (
    <div className={styles['modal']} data-testid="character-modal">
      <div className={styles['image-block']}>
        <img className={styles['image']} src={data.image} alt={data.name} />
      </div>
      <div className={styles['content']}>
        <div className={styles['name']}>{data.name}</div>
        {Object.entries(displayData).map((elem, idx) => {
          const title = elem[0].toUpperCase();
          let value = typeof elem[1] === 'string' ? elem[1] : elem[1].name;
          value = value ? value : '-';

          return (
            <div className={styles['info-row']} key={idx}>
              <div className={styles['info-row__title']}>{title}:</div>
              <div className={styles['info-row__value']} title={value}>
                {value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterModal;

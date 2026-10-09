import type { ImageMetadata } from 'astro';

import absalyamov from '@/assets/images/doctors/absalyamov.jpg';
import albino from '@/assets/images/doctors/albino.jpg';
import arveladze from '@/assets/images/doctors/arveladze.jpg';
import kholod from '@/assets/images/doctors/kholod.jpg';
import kochergin from '@/assets/images/doctors/kochergin.jpg';
import lazariashvili from '@/assets/images/doctors/lazariashvili.jpg';
import munblit from '@/assets/images/doctors/munblit.jpg';
import shapiro from '@/assets/images/doctors/shapiro.jpg';
import at from '@/assets/images/flags/at.svg';
import de from '@/assets/images/flags/de.svg';
import gb from '@/assets/images/flags/gb.svg';
import il from '@/assets/images/flags/il.svg';
import us from '@/assets/images/flags/us.svg';

export interface Doctor {
  name: string;
  role: string;
  credentials: string;
  city: string;
  organization: string;
  photo: ImageMetadata;
  flag: ImageMetadata;
}

export const doctors: Doctor[] = [
  {
    name: 'Dr. Miguel Albino',
    role: 'Medical oncologist & hematologist',
    credentials: 'Board-certified (ABIM). 17 years in practice',
    city: 'Austin, USA',
    organization: 'Texas Oncology',
    photo: albino,
    flag: us,
  },
  {
    name: 'Dr. Ruslan Absalyamov',
    role: 'Medical oncologist & cancer surgeon',
    credentials: "Israel's largest cancer center. ESMO-certified",
    city: 'Tel Aviv, Israel',
    organization: 'Davidoff Cancer Center',
    photo: absalyamov,
    flag: il,
  },
  {
    name: 'Dr. Maxim Kochergin',
    role: 'Uro-oncologist',
    credentials: 'A top-20 hospital worldwide. 6+ peer-reviewed papers',
    city: 'Vienna, Austria',
    organization: 'MedUni Wien (AKH)',
    photo: kochergin,
    flag: at,
  },
  {
    name: 'Dr. Dmitry Shapiro',
    role: 'Chief of general & visceral surgery',
    credentials: 'Board-certified surgeon. Previously at University Hospital Münster',
    city: 'Cologne, Germany',
    organization: 'St. Vinzenz Hospital',
    photo: shapiro,
    flag: de,
  },
  {
    name: 'Dr. Sofia Kholod',
    role: 'Internal medicine & diabetes',
    credentials: 'Trained at Shaare Zedek, Jerusalem. 12 years in practice',
    city: 'Jerusalem, Israel',
    organization: 'Second opinions on complex cases',
    photo: kholod,
    flag: il,
  },
  {
    name: 'Dr. Otar Lazariashvili',
    role: 'Cardiologist, cardiac imaging',
    credentials: "Cardiac MRI fellowship at Guy's and St Thomas'",
    city: 'Exeter, UK',
    organization: 'Royal Devon University Hospital',
    photo: lazariashvili,
    flag: gb,
  },
  {
    name: 'Prof. Daniel Munblit',
    role: 'Paediatrician & allergist',
    credentials: "Reader in Paediatrics at King's College London",
    city: 'London, UK',
    organization: 'Imperial College London',
    photo: munblit,
    flag: gb,
  },
  {
    name: 'Dr. Samson Arveladze',
    role: 'Orthopaedic & hand surgeon',
    credentials: 'Hand surgery at Ichilov. Research at the AO Foundation, Davos',
    city: 'Tel Aviv, Israel',
    organization: 'Tel Aviv Sourasky Medical Center',
    photo: arveladze,
    flag: il,
  },
];

const incidentData = [
  {
    id: "stroke",
    src: "/image/befast.png",
    title: "Stroke",
    description:
      ' "Occurs when blood flow to parts of the brain is reduced or blocked." ',
    treatment:
      "During a stroke, immediately call emergency services (103/911), note the time symptoms started it is crucial for doctors, keep the person calm and on their side with their head slightly raised, loosen tight clothing to help up with the breathing, and do NOT give food, drink, or aspirin, as quick treatment is crucial and some meds can worsen bleeding strokes. If unconscious, check breathing / pulse and start CPR if they don't have any. ",
  },

  {
    id: "asthma",
    src: "/image/asthma.png",

    title: "Asthma Attack",
    description:
      '"A sudden narrowing of airways that causes breathing difficulty."',
    treatment:
      "During an asthma attack, stay calm, sit upright, and use your reliever inhaler (blue/grey) with a spacer if possible, taking puffs every 30-60 seconds (up to 10 puffs) until better, or call emergency services (999/000/103) if symptoms worsen or don't improve after 10 puffs. Always follow your personal asthma action plan, and seek urgent medical follow-up even if you feel better after an attack.",
  },

  {
    id: "heart-attack",
    src: "/image/heartattack.png",

    title: "Heart Attack",
    description:
      '"Happens when blood flow to the heart is blocked or severely reduced."',
    treatment:
      "During a heart attack, immediately call (911/103), have the person rest, loosen tight clothing, and if prescribed, give nitroglycerin; chew and swallow an aspirin (if not allergic) while waiting for help to thin the blood, and start CPR and use an AED if the person becomes unresponsive. Time is critical, so don't delay calling emergency services to get to a hospital fast. ",
  },

  {
    id: "burns",
    src: "/image/burns.png",

    title: "Burns",
    description: '"Skin damage caused by heat, chemicals, or electricity."',
    treatment:
      "For burns, immediately cool the area with cool running water for 10-20 mins, remove jewelry/clothing (not stuck to skin), cover loosely with cling film/clean cloth, use pain relievers if needed, and elevate the area; avoid ice, butter, or breaking blisters, and seek urgent care for severe, deep, large, or chemical/electrical burns. ",
  },

  {
    id: "gunshot",
    src: "/image/gunshot.png",

    title: "Gunshot Injury",
    description:
      '"An injury caused by a projectile from a firearm. Severity varies."',
    treatment:
      "If you are shot, the immediate priorities are to get to safety, call emergency services (911/103), and stop the bleeding. Move away from the line of fire, and once safe, call emergency services. Apply firm, direct pressure to the wound with a clean cloth. If the wound is on a limb and pressure doesn't stop the bleeding, use a tourniquet or a tight clothing piece a few inches above the wound and note the time it was applied. Lie down to prevent shock, keep warm, and do not remove any embedded objects or bullets. Stay calm and wait for professional medical help.",
  },

  {
    id: "stab-wound",
    src: "/image/stab.png",

    title: "Stab Injury",
    description: '"An injury caused by a sharp object penetrating the body."',
    treatment:
      "If you are stabbed, immediately call emergency services. Your top priority is to stop the bleeding while waiting for help. Do not remove an embedded object; leave it in place and apply firm pressure to the area around the object using a clean cloth. If the object is removed, apply direct, firm pressure over the wound with a clean cloth, adding layers as needed, until help arrives. Lie down, stay calm, and remain still to slow blood loss. Keep the person warm with a blanket or coat to prevent shock, and do not eat or drink anything. All stab wounds, even minor-appearing ones, require immediate medical assessment due to the risk of internal damage and infection.",
  },

  {
    id: "fracture",
    src: "/image/fracture.png",

    title: "Bone Fracture",
    description:
      '"A break or crack in a bone usually caused by force or accidents."',
    treatment:
      "When you get a fracture, immediately call for emergency help (like 911 or your local emergency number), stop all movement of the injured area, apply ice (wrapped in cloth) to reduce swelling, and control any bleeding by applying pressure around any protruding bone. Do not try to straighten the bone or push it back in, and avoid giving food or drink in case surgery is needed. ",
  },

  {
    id: "concussion",
    src: "/image/concussion.png",

    title: "Concussion",
    description:
      '"A mild injury to the brain caused by an impact or rapid movement."',
    treatment:
      "When you get a concussion, prioritize rest (physical and mental), avoid activities that worsen symptoms like screens or sports, and gradually return to normal tasks, but see a doctor for evaluation, especially if symptoms are severe or don't improve, as they'll provide specific guidance on managing headaches and when it's safe to resume activities like driving or sports. ",
  },

  {
    id: "allergic",
    title: "Severe Allergic Reaction",
    src: "/image/allergy.png",

    description:
      '"A strong reaction that may cause swelling or breathing issues."',
    treatment:
      "For a severe allergic reaction //Anaphylaxis//, immediately use an epinephrine auto-injector if available, call 911 (or your local emergency number), and lay the person flat with legs raised (unless they're having trouble breathing, then sit them up) while waiting for help, as this is a medical emergency requiring prompt action and hospital observation for a possible second reaction. ",
  },

  {
    id: "dehydration",
    title: "Dehydration",
    src: "/image/dehydration.png",

    description: '"When the body loses more fluid than it receives."',
    treatment:
      "To treat dehydration, drink plenty of fluids like water, or diluted sports drinks, especially if vomiting or diarrhea occurred, and rest in a cool place; avoid sugary drinks, caffeine, and alcohol, and seek immediate medical help for severe symptoms like confusion or inability to keep fluids down. ",
  },

  {
    id: "hypothermia",
    title: "Hypothermia",
    src: "/image/hypothermia.png",

    description: '"A condition where body temperature drops too low."',
    treatment:
      "If someone has hypothermia, call emergency services immediately, then gently move them to a warm, dry place, remove wet clothes, and cover them in dry blankets (especially the head, neck, chest, and groin) while gradually warming them with warm, sugary drinks and food (if fully alert), avoiding rapid heating like hot baths or alcohol. Be gentle, avoid rubbing, and start CPR if they become unresponsive and aren't breathing. ",
  },

  {
    id: "heatstroke",
    title: "Heatstroke",
    src: "/image/heatstroke.png",

    description:
      '"Dangerous overheating of the body due to high temperature or activity."',
    treatment:
      "If someone gets a heatstroke immediately call for emergency help (911/103) and start rapid cooling by moving the person to a cool place, removing excess clothing, and applying cool water, wet cloths, or ice packs to the neck, armpits, and groin, while fanning them to lower body temperature until help arrives. If the person is conscious, offer cool water or sports drinks, but avoid alcohol or caffeine. ",
  },
];

export default incidentData;
